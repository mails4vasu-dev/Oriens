function masterHeaders(){
  return (
[
  {
    "masterName": "assetCategory",
    "headerName":
       [
        {jsonHeader:"assetCategoryName", htmlHeader:"Asset Category Name"}
        ,{jsonHeader:"parentCategoryId", htmlHeader:"Parent Category"
        ,controlType :"selectOption"
        ,parentName :"assetCategory"
        ,selectKey:"Id"
        ,selectValue:"assetCategoryName"
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
    "masterName": "assetsLocation",
    "headerName":
       [
        {jsonHeader:"locationName", htmlHeader:"Location Name"}
       ,{jsonHeader:"quantity", htmlHeader:"Quantity"}
       ,{jsonHeader:"comments", htmlHeader:"Comments"}
       ,{jsonHeader:"notes", htmlHeader:"Notes"}
     //  ,{jsonHeader:"assetId", htmlHeader:"AssetId"}
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
        {jsonHeader:"assetName", htmlHeader:"Asset Name"}
       ,{jsonHeader:"serialNumber", htmlHeader:"Serial Number"}
       ,{jsonHeader:"model", htmlHeader:"Model"}
       ,{jsonHeader:"purchasePrice", htmlHeader:"Purchase Price"}
       ,{jsonHeader:"installationDate", htmlHeader:"Installation Date"}
       ,{jsonHeader:"startDate", htmlHeader:"Start Date"}
       ,{jsonHeader:"expirationDate", htmlHeader:"Expiration Date"}
      ,{jsonHeader:"threshHoldCalendar", htmlHeader:"ThreshHold Calendar"}
   //    ,{jsonHeader:"startingUsage", htmlHeader:"Starting Usage"}
      // ,{jsonHeader:"expirationUsage", htmlHeader:"Expiration Usage"}
       ,{jsonHeader:"assetTypeId", htmlHeader:"Asset Type"
        ,controlType :"selectOption"
        ,parentName :"assetsType"
        ,selectKey:"Id"
        ,selectValue:"assetTypeName"}
       ,{jsonHeader:"uomId", htmlHeader:"Uom"
       ,controlType :"selectOption"
       ,parentName :"uom"
       ,selectKey:"Id"
       ,selectValue:"uomName"}
       ,{jsonHeader:"assetWarrantyId", htmlHeader:"Asset Warranty"
       ,controlType :"selectOption"
       ,parentName :"assetsWarranty"
       ,selectKey:"Id"
       ,selectValue:"warrantyName"}
       ,{jsonHeader:"assetCategoryId", htmlHeader:"Asset Category"
       ,controlType :"selectOption"
       ,parentName :"assetCategory"
       ,selectKey:"Id"
       ,selectValue:"assetCategoryName"
      }
       ,{jsonHeader:"failureClassesId", htmlHeader:"Failure Classes"
       ,controlType :"selectOption"
       ,parentName :"failureClass"
       ,selectKey:"Id"
       ,selectValue:"failureClassName"}
       ,{jsonHeader:"assetPriorityId", htmlHeader:"Asset Priority"
       ,controlType :"selectOption"
       ,parentName :"assetsPriority"
       ,selectKey:"Id"
       ,selectValue:"priorityName"}
       ,{jsonHeader:"assetCriticalityId", htmlHeader:"Asset Criticality"
       ,controlType :"selectOption"
       ,parentName :"assetsCriticality"
       ,selectKey:"Id"
       ,selectValue:"criticalityName"}
       ,{jsonHeader:"assetStatusId", htmlHeader:"Asset Status"
       ,controlType :"selectOption"
       ,parentName :"assetsStatus"
       ,selectKey:"Id"
       ,selectValue:"statusName"
      }
      //  ,{jsonHeader:"parentAssetId", htmlHeader:"Parent Asset"
      //  ,controlType :"selectOption"
      //  ,parentName :"assets"
      //  ,selectKey:"Id"
      //  ,selectValue:"assetName"}
       ,{jsonHeader:"comments", htmlHeader:"Comments"}
       ,{jsonHeader:"notes", htmlHeader:"Notes"}
      ]
  }
]
  

  )
}
export default masterHeaders;