function createDataset(fields, constraints, sortFields) {

	//Cria um dataset e adiciona as colunas
	//Documentação: Construção do Dataset Avançado
	    var dataset = DatasetBuilder.newDataset();
	    dataset.addColumn("Matriz")
	    dataset.addColumn("Empresa")
	    dataset.addColumn("Filial")
	    

	    dataset.addRow(new Array("São Paulo", "Compila","Motor Fiscal - SP" ))
	    dataset.addRow(new Array("São Paulo", "Motor Fiscal"," Compila - SP" ))
	    dataset.addRow(new Array("São Paulo", "Totvs", "Totvs - MG" ))
	    dataset.addRow(new Array("São Paulo", "Fluig", "Fluig - MG" ))

	    return dataset

	}
	
