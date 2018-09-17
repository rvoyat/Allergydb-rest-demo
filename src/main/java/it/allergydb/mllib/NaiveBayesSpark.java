package it.allergydb.mllib;

import it.allergydb.rest.demo.entity.Symptom;
import it.allergydb.rest.demo.util.SVMMaker;

import org.apache.spark.mllib.classification.NaiveBayesModel;
import org.apache.spark.sql.SparkSession;
import org.springframework.stereotype.Component;

@Component
public class NaiveBayesSpark {
	
	SVMMaker maker = new SVMMaker();
	
    public static String HADOOP_USER = "hduser";
    
    public static String HADOOP_HOME_DIR = "/opt/hadoop";
    
    public static String HADOOP_MODELS_DIR = "/tmp/Models/";
	
	public String runModel(String allergene, Symptom[] symptoms){
		 System.setProperty("HADOOP_USER_NAME", HADOOP_USER);
	      System.setProperty("hadoop.home.dir",HADOOP_HOME_DIR);
	        
		String result ="";
		String modelPath ="hdfs://localhost:54310"+ HADOOP_MODELS_DIR;
		String modelName = "NaiveBayes_"+allergene;

		org.apache.spark.mllib.linalg.Vector features =maker.createSVMRow(symptoms);
         SparkSession spark = SparkSession.builder().appName("LSVMSpark").master("local").getOrCreate();
         NaiveBayesModel sameModel = NaiveBayesModel.load(spark.sparkContext(), modelPath+modelName);
        //org.apache.spark.mllib.regression.LabeledPoint point = new  org.apache.spark.mllib.regression.LabeledPoint(Double.parseDouble("0.0"),features );
        double predicted = sameModel.predict(features);
        result = String.valueOf(predicted*100);
        
        return result;
	}

}
