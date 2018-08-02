package it.allergydb.rest.demo.util;
 

import it.allergydb.rest.demo.entity.Symptom;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.spark.mllib.linalg.Vectors;

public class SVMMaker {

    private List<String> simptoms_keys = generateKeys(); 
    private Map<String,Integer> indexSymptoms;
    private Map<String,Integer> indexAllergens; 
    
    private String DELIMITER = "_"; 
    private String DELIMITER_ITEM = "X"; 
    private String DOUBLE_DOT = ":"; 
    private Double featureOK = Double.valueOf(1.8);
    private String LABEL_TRUE = "1";
    private String LABEL_FALSE = "0";
     

    public org.apache.spark.mllib.linalg.Vector createSVMRow(Symptom[] symptoms){
    	StringBuilder result = new StringBuilder("");
        Map<Integer, Double> sintomiDefault = creaDefault();
     	
    	//symptoms=NosePrickingX2X2_NoseRunnyX2X2_NoseSneezingX2X2_EyePrickingX2X2
    	for(Symptom symptom : symptoms){  
            sintomiDefault.put(getIndexSymptoms().get(symptom.getKey()),setValueFeature(symptom.getFrequency(),symptom.getSeverity())  );
    	}
    	double[] features  = new double[125];
    	int idx = 0;
    	for(Integer keySym: sintomiDefault.keySet()){
    		/*result.append(keySym.toString());
    		result.append(DOUBLE_DOT);
    		result.append(sintomiDefault.get(keySym).toString());
    		result.append(DELIMITER);*/
    		features[idx] = sintomiDefault.get(keySym).doubleValue();
    		idx++;
        }  
    	
    	return Vectors.dense(features);
    }
    
    
   private Double setValueFeature(Integer frequency, Integer severity) {
        
        Double result =  featureOK;
        
        int plus = 1;
        try{
            plus = (severity!= null?severity:0) + ((frequency!= null?frequency:1)*2);
        }catch(Exception e){
            
        } 
        return result + ( plus / 10);
    } 
    
    private Map<Integer, Double> creaDefault() {
        Map<Integer, Double> def = new HashMap<Integer, Double>();
        simptoms_keys.forEach(key ->{
            def.put(getIndexSymptoms().get(key), Double.valueOf(0.0));
        });
        return def;
    }

    private List<String> generateKeys() {
        List<String> result = new ArrayList<String>();
        Map<String, String[]> symt = IAllergyConstants.SYMPTOMS;
        symt.keySet().forEach(key ->{ 
            for(String cor:symt.get(key)){
                result.add(key+cor);
            }
        });
         
        return result;
    }

    private Map<String, Integer> getIndexSymptoms(){
        if(indexSymptoms == null){
            indexSymptoms = new HashMap<>();
            int idxCat = 100;
           for(String cat: IAllergyConstants.BODY_PARTS){ 
               for(String allerg: IAllergyConstants.SYMPTOMS.get(cat)){
                   indexSymptoms.put((cat+allerg), Integer.valueOf(idxCat));
                   idxCat++;
               } 
           }
        }
        return indexSymptoms;
    } 
    
    private Map<String, Integer> getIndexAllergens(){
        if(indexAllergens == null){
            indexAllergens = new HashMap<>();
            int idxCat = 0;
           for(String cat: IAllergyConstants.ALLERGEN_CATEGORIES){ 
               for(String allerg: IAllergyConstants.ALLERGENS.get(cat)){
                   indexAllergens.put((cat+"_"+allerg), Integer.valueOf(idxCat));
                   idxCat++;
               } 
           }
        }
        return indexAllergens;
    } 
}
