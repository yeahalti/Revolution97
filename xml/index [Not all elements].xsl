<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>
<xsl:template match="/">
<html>
<body>
    <style>
    @font-face {
font-family: BrandonGrotesqueRegular;
font-style: normal;
font-weight: normal;
src: url('font/BrandonGrotesqueRegular.otf') format('opentype');
}
        
html,
body {
  height: 100%;
}
body {
  margin: 0;
    //background: rgba(45, 23, 49, 1.0);
//background: -webkit-linear-gradient(top right, rgba(45, 23, 49, 1.0), rgba(0, 0, 0, 1.0));
//background: -moz-linear-gradient(top right, rgba(45, 23, 49, 1.0), rgba(0, 0, 0, 1.0));
//background: linear-gradient(top right, rgba(45, 23, 49, 1.0), rgba(0, 0, 0, 1.0));
  background: -webkit-linear-gradient(45deg, #49a09d, #5f2c82);
background: linear-gradient(45deg, #49a09d, #5f2c82);
font-family: BrandonGrotesqueRegular;
  font-weight: 100;
}
h2{
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table {
     
  position: relative;
  left: 15%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
th,
td {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
th {
  text-align: center;

}
thead th {
  background-color: rgba(60, 75, 139, 1.0);
 //background-color: rgba(45, 23, 49, 1);
}
        @media screen and (min-width:850px){
tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
tbody td {
  position: relative;
}
tbody td:hover:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}}
 .basic {
        background-color: rgba(13, 191, 217, 0.6);
         }
.special {
        background-color: rgba(49, 208, 85, 0.5);
        }
.premium {
        background-color: rgba(201, 77, 101, 0.5);

        }
        
    
@media screen and (max-width: 1500px) {
table {
        left: 0%;
width: auto !important;
}

table-wrap {
overflow-x: auto;-webkit-overflow-scrolling: touch;
}
}    
 
        /*
	Max width before this PARTICULAR table gets nasty. This query will take effect for any screen smaller than 760px and also iPads specifically.
	*/
	@media
	  only screen 
    and (max-width: 850px), (min-device-width: 768px) 
    and (max-device-width: 1024px)  {

		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

    tr {
      margin: 0 0 1rem 0;
    }
      
    tr:nth-child(odd) {
     
    }
    
		td {
			/* Behave  like a "row" */
			border: none;
			border-bottom: 1px solid #eee;
			position: relative;
			padding-left: 50%;
		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

		/*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
		td:nth-of-type(1):before { content: "Sr no"; }
		td:nth-of-type(2):before { content: "Item"; }
		td:nth-of-type(3):before { content: "Quantity"; }
		td:nth-of-type(4):before { content: "Unit"; }
		td:nth-of-type(5):before { content: "Amount"; }
		td:nth-of-type(6):before { content: "Rate"; }
		td:nth-of-type(7):before { content: "Amount"; }
		td:nth-of-type(8):before { content: "Rate"; }
		td:nth-of-type(9):before { content: "Amount"; }
		td:nth-of-type(10):before { content: "Rate"; }
	}
        
    </style>
<h2>Quotations</h2>
    <div class="container">
<table border= "1" >
    <thead>
     <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th colspan="2" class="premium">PREMIUM</th>
    <th colspan="2" class="special">SPECIAL</th>
    <th colspan="2" class="basic">BASIC</th>
  </tr>
<tr>
<th>Sr no</th>
<th>Item</th>
<th>Quantity</th>
<th>Unit</th>
<th class="premium">Rate</th>
<th class="premium">Amount</th>
<th class="special">Rate</th>
<th class="special">Amount</th>
<th class="basic">Rate</th>
<th class="basic">Amount</th>
</tr>
    </thead>
    <tbody>
<xsl:for-each select="quot-data/details">
<tr>
<td><xsl:value-of select="srno"/></td>
<td><xsl:value-of select="item"/></td>
<td><xsl:value-of select="qty"/></td>
<td><xsl:value-of select="unit"/></td>
    <td class="premium"><xsl:value-of select="rate1"/></td>
    <td class="premium"><xsl:value-of select="amount1"/></td>
    <td class="special"><xsl:value-of select="rate2"/></td>
    <td class="special"><xsl:value-of select="amount2"/></td>
    <td class="basic"><xsl:value-of select="rate3"/></td>
    <td class="basic"><xsl:value-of select="amount3"/></td>
    
</tr>
</xsl:for-each>
    </tbody>
</table>
    </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>