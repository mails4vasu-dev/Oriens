import React, { useState,useEffect } from 'react'
import SortableTree, { toggleExpandedForAll } from '@nosferatu500/react-sortable-tree';
import FileExplorerTheme from '@nosferatu500/theme-file-explorer';
import maintree_icon from '../../../assets/images/main_tree_ico.png';
import Subtree_icon from '../../../assets/images/main_sub_tree_ico.png';
import { Configuration } from "../../../config/index";
const TreeFilter =({TreeType, onCancel}) => {
  const BASE_URL = (url) => Configuration.BASE_URL + url;
 
  const AssetLocationUrl=BASE_URL('/location/getall');
  const [searchString, setSearchString] = useState('');
  const [searchFocusIndex, setSearchFocusIndex] = useState(0);
  const [AssetLocations,setAssetLocations] = useState([]);
  const [SelectedLocationId,setSelectedLocationId] = useState([]);
  var LocationList=[];
  var AssetLocationsList=[
    {
      title: 'Facility 1q3q4',
      dragDisabled: true,
      expanded: false
    }
  ];
  useEffect(() => {
    if(TreeType=="location"){
      fetch(AssetLocationUrl)
      .then(res => {
          if (res.status >= 400) {
              throw new Error("Server responds with error!")
          }
          return res.json()
      })
      .then(data => {
        
        setAssetLocations(data.result);
        var results=data.result;  
        Object.keys(results).map((index)=>{
            var locationItem={
              title: results[index].locationName,
              dragDisabled: true,
              expanded: true,
              id:results[index].id
            };
            LocationList.push(locationItem);
        });
        })
        
    }
    
  }, []);
  
  
 
  const nodeSelectedEvent = (jsonKey) => {
var locationId=jsonKey.currentTarget.attributes['paramId'].value;
onCancel(locationId);


  } 
  
  
  const treeDataDefs = [
    
    {
      title: 'Helsinki',
      isDirectory: true,
      expanded: true,
      dragDisabled: true,
      children: [
        {
          title: 'Facility',
          isDirectory: true,
          dragDisabled: true,
          expanded: false,
          children: [
            { 
              title: 'Line P520',
              dragDisabled: true, 
              children: [
                {
                    title: "P521 - Lid Handling",
                    dragDisabled: true,
                    expanded: true,
                    children: [
                        {
                            title: "P521 - 1 - Dosing",
                            expanded: true,
                            dragDisabled: true,
                        }
                    ],
                    title: "P522 - Box Handling",
                    dragDisabled: true,
                }
              ],
              
            },
          ],
        },
        { 
          title: 'Production',
          isDirectory: true,
          dragDisabled: true,
          expanded: true,
          children: [
            { 
              title: 'Line P520',
              dragDisabled: true, 
              children: [
                {
                    title: "P521 - Lid Handling",
                    dragDisabled: true,
                    expanded: true,
                    children: [
                        {
                            title: "P521 - 1 - Dosing",
                            expanded: true,
                            dragDisabled: true,
                        }
                    ],
                    title: "P522 - Box Handling",
                    dragDisabled: true,
                }
              ],
              title: 'Line P521',
              dragDisabled: true, 
              children: [
                {
                    title: "P523 - Mixer",
                    dragDisabled: true,
                    expanded: true,
                    children: [
                        {
                            title: "P523 - 3 - Dosing",
                            expanded: true,
                            dragDisabled: true,
                        }
                    ],
                    title: "P524 - Box Handling",
                    dragDisabled: true,
                }
              ],
              title: 'Line P522',
              dragDisabled: true, 
              children: [
                {
                    title: "P522 - Mixer",
                    dragDisabled: true,
                    expanded: true,
                    children: [
                        {
                            title: "P522 - 3 - Dosing",
                            expanded: true,
                            dragDisabled: true,
                        }
                    ],
                    title: "P524 - Box Handling",
                    dragDisabled: true,
                }
              ]
            },
          ],
        },
        {
          title: 'Utility',
          isDirectory: true,
          dragDisabled: true,
          expanded: false,
          children: [
            { 
              title: 'Line P520',
              dragDisabled: true, 
              children: [
                {
                    title: "P521 - Lid Handling",
                    dragDisabled: true,
                    expanded: true,
                    children: [
                        {
                            title: "P521 - 1 - Dosing",
                            expanded: true,
                            dragDisabled: true,
                        }
                    ],
                    title: "P522 - Box Handling",
                    dragDisabled: true,
                }
              ],
              
            },
          ],
        },
      ],
    },
    
  ];


  const treeLocationDefs = [
    
    {
      title: 'Helsinki',
      isDirectory: true,
      expanded: true,
      dragDisabled: true,
      children: LocationList,
    },
    
  ];

  const [treeData, setTreeData] = useState(treeLocationDefs);

  const updateTreeData = (newTreeData: any[]) => {
    setTreeData(newTreeData);
  }


  const alertNodeInfo = ({ node, path, treeIndex }: any) => {
    const objectString = Object.keys(node)
      .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
      .join(',\n   ');

    alert(
      'Info passed to the icon and button generators:\n\n' +
      `node: {\n   ${objectString}\n},\n` +
      `path: [${path.join(', ')}],\n` +
      `treeIndex: ${treeIndex}`
    );
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', height: '430px' }}
    >
      <div style={{ flex: '0 0 auto', padding: '0 0 0 0' }}>
        
        <form
          
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <label htmlFor="find-box" className='tree_search_outer_wrap'>
           <input
              id="find-box"
              type="text"
              placeholder='Enter the Location Name '
              value={searchString}
              onChange={event =>
                setSearchString(event.target.value)
              }
            />
          </label>
        </form>
      </div>

      <div style={{ flex: '1 0 50%', padding: '0 0 0 0' }}>
        <SortableTree
      
          theme={FileExplorerTheme}
          treeData={treeData}
          
          
          onChange={updateTreeData}
          //onChange={treeData => updateTreeData({ treeData })}
          searchQuery={searchString}
          searchFocusOffset={searchFocusIndex}
          searchFinishCallback={(matches: any) => {
            setSearchFocusIndex(
              matches.length > 0 ? searchFocusIndex % matches.length : 0
            )
          }}
          canDrag={({ node }: any) => !node.dragDisabled}
          canDrop={({ nextParent }: any) => !nextParent || nextParent.isDirectory}
          generateNodeProps={(rowInfo: any) => ({
            title: (
             
              <button onClick={nodeSelectedEvent} paramId={rowInfo.node.title}>{rowInfo.node.title}</button>
          ),
            icons: rowInfo.node.isDirectory
              ? [
                
                  <img src={maintree_icon} />,
              ]
              : [
                <img src={Subtree_icon} />,
              ],
          })}
        />
      </div>
    </div>
  );
}

export default TreeFilter
