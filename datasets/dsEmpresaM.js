function createDataset(fields, constraints, sortFields) {

	//Cria um dataset e adiciona as colunas
	//Documentação: Construção do Dataset Avançado
	    var dataset = DatasetBuilder.newDataset();
	    dataset.addColumn("nome")
	    dataset.addColumn("cnpj")
	    

		dataset.addRow(new Array("Nexora Tecnologia Ltda.", "12.345.678/0001-91"));
		dataset.addRow(new Array("VerdeVale Alimentos S.A.", "98.765.432/0001-08"));
		dataset.addRow(new Array("Orbix Soluções Ambientais EIRELI", "45.789.123/0001-67"));
		dataset.addRow(new Array("Lumina Design Criativo ME", "23.456.789/0001-34"));
		dataset.addRow(new Array("AgroNova Comércio e Exportação Ltda.", "67.890.123/0001-50"));

	    return dataset

	}
	
