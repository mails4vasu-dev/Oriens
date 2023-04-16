import { useEffect,useState } from "react";

function masterRequest(){
  return (
    
  [
    {
      "masterName": "assetCategory",
      "requestJson":
      [
        {
            "assetCategoryName":null
            , "parentAssetCategoryName":null
          , "Id":"00000000-0000-0000-0000-000000000000"
          ,"assetCategoryCode":null
          ,"parentCategoryId":null

        }
      ]
    },
    {
      "masterName": "assetsCriticality",
      "requestJson":
      [
        {"criticalityName":"<criticalityName>"
        , "Id":"00000000-0000-0000-0000-000000000000"
        ,"rpnFrom":"<rpnFrom>"
        ,"rpnTo":"<rpnTo>"
      }]
    }
    ,
    {
      "masterName": "assetsPriority",
      "requestJson":
        [
          {"priorityName":"<priorityName>"}
        ]
    }
    ,
    {
      "masterName": "assetsStatus",
      "requestJson":
        [
          {"statusName":"<statusName>","Comments":null,"Notes":null}
        ]
    }
    ,{
      "masterName": "assetsType",
      "requestJson":
        [
          {"assetTypeName":"<assetTypeName>"}
        ]
    }
    ,{
      "masterName": "assetsWarranty",
      "requestJson":
        [
          {
            "warrantyName":"<warrantyName>"
          ,"StartDate":"0001-01-01T00:00:00"
          ,"ExpirationDate":"0001-01-01T00:00:00"
          ,"WarrantyType":0,"WarrantyStatus":0
          ,"ThreshholdDate":"0001-01-01T00:00:00"
          ,"StartingUsage":"","ExpirationUsage":""
          ,"ThreshHoldUOM":""
          ,"Comments":null,"Notes":null
          }

        ]
    }

    ,
    {
      "masterName": "locationType",
      "requestJson":
      [
        {
          "locationTypeName":"<locationTypeName>"
          ,"Id":"00000000-0000-0000-0000-000000000000"
      }

      ]
    }
    ,
    {
      "masterName": "location",
      "requestJson":
      [
        {
          "parentLocationId":"00000000-0000-0000-0000-000000000000"
          ,"locationName":"<locationName>"
          ,"locationDesc":"<locationDesc>"
          ,"locationTypeId":"00000000-0000-0000-0000-000000000000"
        ,"Id":"00000000-0000-0000-0000-000000000000"
      }

      ]
    }

    ,
    {
      "masterName": "assetsLocation",
      "requestJson":
      [
        {"assetId":"00000000-0000-0000-0000-000000000000"
        ,"locationId":"00000000-0000-0000-0000-000000000000"
        ,"quantity":0.0
        ,"Id":"00000000-0000-0000-0000-000000000000"
        ,"Comments":null
        ,"Notes":null
      }

      ]
    }
    ,{
      "masterName": "assets",
      "requestJson":
      [
        {"assetName":"<assetName>"
        ,"serialNumber":"<serialNumber>"
        ,"model":""
        ,"purchasePrice":0.0
        ,"installationDate":null
        ,"startDate":null
        ,"expirationDate":null
        ,"threshHoldCalendar":null
        //,"StartingUsage":"","ExpirationUsage":""
        //,"QrCodeData":""
        ,"assetTypeId":"00000000-0000-0000-0000-000000000000"
        ,"uomId":"00000000-0000-0000-0000-000000000000"
        ,"assetWarrantyId":"00000000-0000-0000-0000-000000000000"
        ,"assetCategoryId":"00000000-0000-0000-0000-000000000000"
        ,"failureClassesId":"00000000-0000-0000-0000-000000000000"
        ,"assetPriorityId":"00000000-0000-0000-0000-000000000000"
        ,"assetCriticalityId":"00000000-0000-0000-0000-000000000000"
        ,"assetStatusId":"00000000-0000-0000-0000-000000000000"
        ,"parentAssetId":"00000000-0000-0000-0000-000000000000"
      }
     ]
    }
  ]
  
  )
}
export default masterRequest;