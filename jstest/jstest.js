var nombres ='', memoires ='';

function bt(nbr) 
{
	nombres += nbr; 
    for (var i = 0; i < nombres.length; i++)
    {
    	if(nombres.substring(0,1) === '+')
    		{
        		nombres = nombres.substring(0, i); 
        		document.getElementById('results').innerHTML = '';
        	}
     	else if (nombres.substring(0,1) === '/')
     		{
      			nombres = nombres.substring(0, i); 
        		document.getElementById('results').innerHTML = '';
     		}
     	else if (nombres.substring(0,1) === '*')
     		{
     	 		nombres = nombres.substring(0, i); 
        		document.getElementById('results').innerHTML = '';
     		}     
     	else
     		{
		document.getElementById('results').innerHTML = nombres;
     		} 
     }
}
 
function clearValue()
{
	for (var i = 0; i < nombres.length; i++) 
    {
		nombres = nombres.substring(0, i);   
		document.getElementById('results').innerHTML = nombres;
    }
    for (var i = 0; i < memoires.length; i++) 
    {
    	memoires = memoires.substring(0, i);
        document.getElementById('memo').innerHTML = memoires;
    }
}


function plusmoins()
{
    if(nombres.substring(0,1))
    	{
        document.getElementById('results').innerHTML = -nombres;
        }
     else
     {
		document.getElementById('results').innerHTML = nombres;
     }
}

function pourcent()
{
	var resultat_final = document.getElementById('results').value;
    results=(resultat_final/100);
    document.getElementById('results').innerHTML = results;
    nombres = document.getElementById('results').value;
}

function del(nbr)
{
	nombres = nombres.substring(0, nombres.length-1);
	document.getElementById('results').innerHTML = nombres;

}

function calcul()
{
  	resultat_final = document.getElementById('results').value;
  	results = eval(resultat_final);
    results = Math.round(results*1000000000)/1000000000;
    
    memoires =  document.getElementById('results').innerHTML;    
    document.getElementById('memo').innerHTML = memoires;
    
  	document.getElementById('results').innerHTML = results;
	nombres = document.getElementById('results').value;

}