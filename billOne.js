// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
		{text:"extra miles alimentations",style:'title'},
        {text:'Receipt no:2022-07-0002',style:'subheader'},
        {text:'25.11.2017  18:33:09',style:'subheader'},
        {text:'cachier:Aline M.',style:'subheader'},
        {text:'------------------------------------------------',style:'breakLine'},

        {
	    style:'tableExemple',
	    table:{
	        widths: ['*','*'],
	        body:[

	            ['Sausage \n 1kg * BIF 4000.00','BIF 4000.00'],
	            ['Cheese \n 1kg * BIF 6000.00','BIF 6000.00'],
	            ['Coca cola \n 1kg*BIF 4000.00','BIF 4000.00'],
	            ],
	            
	    },
	    layout:'noBorders'
	    
	    
	},
	{text:'------------------------------------------------',style:'breakLine'},
	'item:3',
	    {
	    style:'tableExemple',
	    table:{
	        widths: ['*','*'],
	        body:[

	            ['Subtotal','BIF 14000.00'],
	            ['Tax','BIF 200.00'],
	            [{text:'Total',style:'title'},'BIF 14200.00'],
	            ],
	            
	    },
	    layout: 'noBorders'
	    
	},
	{ style:'footer',
	
	    table:{
	        widths:['*','*'],
	        body:[
	            [ { qr: 'text in QR' },{text:'Tanks!!',style:'subheader'}]
	            ]
	    },
	    layout:'noBorders'
	    
	},
	],

	styles: {
	    title:{
	        fontSize:20,
	        bold:true,
	        
	        textAlign:'center'
	    },
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		footer:{
		    padding:[20,0,0,0]
		}
		,
		subheader: {

			bold: true,
			margin: [0, 10, 0, 0]
		},
		breakLine:{
		    width:100,
		    fontSize:16,
		    color:'grey'
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		}
	},
	 pageSize: {
    width: 302,
    height: 'auto'
  },
	
}