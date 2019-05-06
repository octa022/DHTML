/*
  "fieldCode" : "", 
  "fieldValue": "",
  "fieldWidth":"",
  "fieldColor":"",
  "dataClass":"",
  "dataStyle":"",
  "label" : "",
  "labelPosition" : "", 
  "description" : "",
  "prefix":"",
  "suffix":"",
  "append":"",
  "prepend":"",  
  "defaultValue" : "",  
  "brickType" : "TEXTINPUT",
  "visible" : true,
  "enabled" : true,
  "validationRule" : "",
  "hint" : "",
*/
export default {
  props:{
    brickJSON:{
      type:Object,
      default:()=> {
        return{
          "fieldCode" : "", 
          "fieldValue": "",
          "fieldWidth":"xs12 md4",
          "fieldColor":"",
          "dataClass":"",
          "dataStyle":"",
          "label" : "",
          "labelPosition" : "",
          "append":"",
          "prepend":"",  
          "defaultValue" : "",  
          "brickType" : "TEXTINPUT",
          "visible" : true,
          "prefix":"",
          "suffix":"",
          "enabled" : true,
          "validationRule" : {},
          "hint" : ""
        }      
      }
    }
  },
  data(){
    return {
      jformBRICK:{
        "fieldCode" : "", 
        "fieldValue": "",
        "fieldWidth":"xs12 md4",
        "fieldColor":"",
        "dataClass":"",
        "dataStyle":"",
        "label" : "",
        "labelPosition" : "",
        "append":"",
        "prepend":"",  
        "defaultValue" : "",  
        "brickType" : "TEXTINPUT",
        "visible" : true,
        "prefix":"",
        "suffix":"",
        "enabled" : true,
        "validationRule" : {},
        "hint" : ""
      }
    }
  },
  methods:{
    assingData(val){
      this.jformBRICK = val
    }
  },
  watch:{
    brickJSON(val){
      this.jformBRICK = val
    }
  }
}