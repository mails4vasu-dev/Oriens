function masterHeaders(){
  return (
[
  {
    "masterName": "assetCategory",
    "headerName":
       [
        {jsonHeader:"assetCategoryName", htmlHeader:"Asset Category Name"}
        ,{jsonHeader:"parentAssetCategoryName", htmlHeader:"Parent Asset Category Name"
        ,edit:"false"}
        ,{jsonHeader:"parentCategoryId", htmlHeader:"Parent Category"
        ,controlType :"selectOption"
        ,parentName :"assetCategory"
        ,selectKey:"Id"
        ,selectValue:"assetCategoryName"
        ,visible:"false"
      }
      //  ,{jsonHeader:"comments", htmlHeader:"Comments"}
      //  ,{jsonHeader:"notes", htmlHeader:"Notes"}
      ]
  },
  {
    "masterName": "assetsCriticality",
    "headerName":
       [
        {jsonHeader:"criticalityName", htmlHeader:"Criticality Name"}
        ,{jsonHeader:"rpnFrom", htmlHeader:"Rpn From",controlType :"datePicker"}
        ,{jsonHeader:"rpnTo", htmlHeader:"Rpn To",controlType :"datePicker"}
      ]
  }
  ,
  {
    "masterName": "assetsPriority",
    "headerName":
       [
        {jsonHeader:"priorityName", htmlHeader:"Priority Name"}
      ]
  }
  ,
  {
    "masterName": "assetsStatus",
    "headerName":
       [
        {jsonHeader:"statusName", htmlHeader:"Status Name"}
      ]
  }
  ,
  {
    "masterName": "assetsType",
    "headerName":
       [
        {jsonHeader:"assetTypeName", htmlHeader:"AssetType Name"}
      ]
  }
  ,{
    "masterName": "assetsWarranty",
    "headerName":
       [
        {jsonHeader:"warrantyName", htmlHeader:"Warranty Name"}
       ,{jsonHeader:"startDate", htmlHeader:"Start Date"
       ,controlType :"datePicker"}
       ,{jsonHeader:"expirationDate", htmlHeader:"Expiration Date"
       ,controlType :"datePicker"}
      //  ,{jsonHeader:"warrantyType", htmlHeader:"Warranty Type"}
      //  ,{jsonHeader:"warrantyStatus", htmlHeader:"Warranty Status"}
      //  ,{jsonHeader:"threshholdDate", htmlHeader:"Threshhold Date"}
      //  ,{jsonHeader:"startingUsage", htmlHeader:"Starting Usage"}
      //  ,{jsonHeader:"expirationUsage", htmlHeader:"Expiration Usage"}
      //  ,{jsonHeader:"threshHoldUOM", htmlHeader:"ThreshHold UOM"}

      ]
  }


  ,
  {
    "masterName": "locationType",
    "headerName":
       [
        {jsonHeader:"locationTypeName", htmlHeader:"Location Type Name"}
      ]
  }
  ,
  {
    "masterName": "location",
    "headerName":
       [
        {jsonHeader:"locationName", htmlHeader:"Location Name"}
        ,{jsonHeader:"locationDesc", htmlHeader:"Location Desc"}
        ,{jsonHeader:"locationType", htmlHeader:"Location Type",edit:"false"}
        ,{jsonHeader:"parentLocation", htmlHeader:"Parent Location",edit:"false"}
        ,{jsonHeader:"parentLocationId", htmlHeader:"Parent Location"
       ,controlType :"selectOption"
       ,parentName :"location"
       ,selectKey:"Id"
       ,selectValue:"locationName"
       ,visible:"false"}
        ,{jsonHeader:"locationTypeId", htmlHeader:"Location Type"
        ,controlType :"selectOption"
        ,parentName :"locationType"
        ,selectKey:"Id"
        ,selectValue:"locationTypeName"
        ,visible:"false"}
      ]
  }
  ,
  {
    "masterName": "assetsLocation",
    "headerName":
       [
        {jsonHeader:"assetName", htmlHeader:"Asset Name","edit":"false"}
        ,{jsonHeader:"locationName", htmlHeader:"Location Name","edit":"false"}
        ,{jsonHeader:"locationId", htmlHeader:"Location"
       ,controlType :"selectOption"
       ,parentName :"location"
       ,selectKey:"Id"
       ,selectValue:"locationName"
       ,visible:"false"}
       ,{jsonHeader:"assetId", htmlHeader:"Asset"
       ,controlType :"selectOption"
       ,parentName :"assets"
       ,selectKey:"Id"
       ,selectValue:"assetName"
       ,visible:"false"}
       ,{jsonHeader:"quantity", htmlHeader:"Quantity"}
       ,{jsonHeader:"comments", htmlHeader:"Comments"}
       ,{jsonHeader:"notes", htmlHeader:"Notes"}
      
      ]
  }
  ,
  {
    "masterName": "failureClass",
    "headerName":
       [
        {jsonHeader:"failureClassName", htmlHeader:"Failure Class Name"}
       //,{jsonHeader:"failureCodeList", htmlHeader:"FailureCodeList"}
       ,{jsonHeader:"comments", htmlHeader:"Comments"}
       ,{jsonHeader:"notes", htmlHeader:"Notes"}
     //  ,{jsonHeader:"assetId", htmlHeader:"AssetId"}
      ]
  }
  ,
  {
    "masterName": "assets",
    "headerName":
       [
        {jsonHeader:"assetName", htmlHeader:"Asset Name",controlType :"link"}
        ,{jsonHeader:"assetId", htmlHeader:"assetId", controlType :"hidden"}
        ,{jsonHeader:"statusName", htmlHeader:"Asset Status",edit:"false"}
        ,{jsonHeader:"assetCategoryName", htmlHeader:"Asset Category Name",edit:"false"
        ,visible:"false"}
        ,{jsonHeader:"assetCategoryId", htmlHeader:"Asset Category Name"
        ,controlType :"selectOption"
        ,parentName :"assetCategory"
        ,selectKey:"Id"
        ,selectValue:"assetCategoryName"
        ,visible:"false"
       }
       ,{jsonHeader:"assetTypeName", htmlHeader:"Asset Type Name",edit:"false"}
       ,{jsonHeader:"priorityName", htmlHeader:"Priority",edit:"false"}
       ,{jsonHeader:"criticalityName", htmlHeader:"Criticality",edit:"false"}
       ,{jsonHeader:"serialNumber", htmlHeader:"Serial Number",visible:"false"}
      
       ,{jsonHeader:"failureClassName", htmlHeader:"Failure Class Name",edit:"false",visible:"false"}
       
       ,{jsonHeader:"warrantyName", htmlHeader:"Warranty Name",edit:"false"
       ,visible:"false"}
       ,{jsonHeader:"uomName", htmlHeader:"UOM Name",edit:"false",visible:"false"}
       ,{jsonHeader:"model", htmlHeader:"Model",visible:"false"}
       ,{jsonHeader:"purchasePrice", htmlHeader:"Purchase Price" ,visible:"false"}
       ,{jsonHeader:"installationDate", htmlHeader:"Installation Date"
       ,controlType :"datePicker",visible:"false"}
       ,{jsonHeader:"startDate", htmlHeader:"Start Date"
       ,controlType :"datePicker",visible:"false"}
       ,{jsonHeader:"expirationDate", htmlHeader:"Expiration Date"
       ,controlType :"datePicker",visible:"false"}
      ,{jsonHeader:"threshHoldCalendar", htmlHeader:"ThreshHold Calendar"
      ,controlType :"datePicker",visible:"false"}
   //    ,{jsonHeader:"startingUsage", htmlHeader:"Starting Usage"}
      // ,{jsonHeader:"expirationUsage", htmlHeader:"Expiration Usage"}
       ,{jsonHeader:"assetTypeId", htmlHeader:"Asset Type"
        ,controlType :"selectOption"
        ,parentName :"assetsType"
        ,selectKey:"Id"
        ,selectValue:"assetTypeName"
        ,visible:"false"
      }
       ,{jsonHeader:"uomId", htmlHeader:"Uom"
       ,controlType :"selectOption"
       ,parentName :"uom"
       ,selectKey:"Id"
       ,selectValue:"uomName"
       ,visible:"false"}
       ,{jsonHeader:"assetWarrantyId", htmlHeader:"Asset Warranty"
       ,controlType :"selectOption"
       ,parentName :"assetsWarranty"
       ,selectKey:"Id"
       ,selectValue:"warrantyName"
       ,visible:"false"}
       
       ,{jsonHeader:"failureClassesId", htmlHeader:"Failure Classes"
       ,controlType :"selectOption"
       ,parentName :"failureClass"
       ,selectKey:"Id"
       ,selectValue:"failureClassName"
       ,visible:"false"}
       ,{jsonHeader:"assetPriorityId", htmlHeader:"Asset Priority"
       ,controlType :"selectOption"
       ,parentName :"assetsPriority"
       ,selectKey:"Id"
       ,selectValue:"priorityName"
       ,visible:"false"}
       ,{jsonHeader:"assetCriticalityId", htmlHeader:"Asset Criticality"
       ,controlType :"selectOption"
       ,parentName :"assetsCriticality"
       ,selectKey:"Id"
       ,selectValue:"criticalityName"
       ,visible:"false"}
       ,{jsonHeader:"assetStatusId", htmlHeader:"Asset Status"
       ,controlType :"selectOption"
       ,parentName :"assetsStatus"
       ,selectKey:"Id"
       ,selectValue:"statusName"
       ,visible:"false"
      }
       ,{jsonHeader:"parentAssetId", htmlHeader:"Parent Asset"
       ,controlType :"selectOption"
       ,parentName :"assets"
       ,selectKey:"Id"
       ,selectValue:"assetName"
       ,visible:"false"
       }
       ,{jsonHeader:"location", htmlHeader:"Location",showicons:"true"
       ,headerListKey:"assetsLocation",visible:"false"}
       ,{jsonHeader:"comments", htmlHeader:"Comments",visible:"false"}
       ,{jsonHeader:"notes", htmlHeader:"Notes",visible:"false"}
      ]
  }
]
  

  )
}
export default masterHeaders;