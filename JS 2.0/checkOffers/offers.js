//get current offers as array
const offersCurrent= "229,1829,1832,1843,1860,1859,1878,1877,1708,1710,1725,1755,1446,1475,1735,1447,1734,1733,1784,1796,1797,1798,1823,1867,1801,1802,1803,1775,1774,1753,1750,1749,1748,1810,1785,1799,1786,1875,1821,1822,1760,1759,1758,1384,1354,1322,1305,1728,1471,1477,1246,1245,1695,1692,1691,1690,1688,1683,1682,1676,1671,1669,1370,1499,1368,1757,1429,1848,1869,1883,1884,1885,1886,1887,1898,1241,1212,1195,1678,1693,1687,1686,1185,1905,1908,1901,1853,1804,1830,1913,1914,1997,1998,2001"

const arrayOffersCurrent = offersCurrent.split(",");
const arrayOffersCurrentLenght=arrayOffersCurrent.length;
console.log('current offers ', arrayOffersCurrentLenght, ' offers');
console.log(arrayOffersCurrent);

//get strategy offers as array (strategy 126)
const offersStrategy= "423,1457,1787,1618,1619,423,1618,1619,1369,1708,1217,1602,1708,1217,1602,1733,1734,1735,1408,1409,1410,1532,229,1810,1408,1409,1410,1217,1602,1691,1686,1217,1532,1693,1688,1217,1532,2125,2125,2126,2071,2121,1370,2076,2111,2124,2116,2071,2121,1370,2122,2076,2111,2124,2117,2123,2116,2122,2076,2071,2117,2123,1695,1690,1217,1532,2118,1217,2127,2129,2128,2112,2115,1302,2120,2096,2113,2114,2097,2098,2111,2087,2088,2089,2090,2091,2093,1302,2094,2118,2082,2119,2112,2115,1302,2120,2096,2113,2114,2097,2098,2087,2088,2089,2090,2091,2093,1302,2094,2118,2082,2119,1829,1831,2118,1217,2127,2129,2128,1827,1891,1892,1836,1864,1865,1876,1893,1894,1871,1872"
const arrayOffersStrategy = offersStrategy.split(",");
const arrayOffersStrategyLength= arrayOffersStrategy.length;
console.log('strategy offers ', arrayOffersStrategyLength, ' offers');
console.log(arrayOffersStrategy);

//check offers
const resultNewOffers=[]
const resultNewOffersUnique=[]
const sameOffers=[]

for(offer of arrayOffersStrategy){
    if(!arrayOffersCurrent.includes(offer)){
        resultNewOffers.push(offer)
    }
    else{
        sameOffers.push(offer)
    }
}

//check unique
for(offer of resultNewOffers){
    if(!resultNewOffersUnique.includes(offer)){
        resultNewOffersUnique.push(offer)
    }
}


//console write
console.log('-----------------------RESULT------------------------');
const resultNewOffersUniqueLength= resultNewOffersUnique.length;
console.log('strategy offers ', resultNewOffersUniqueLength, ' offers');
console.log(resultNewOffers);

const sameOffersLength= sameOffers.length;
console.log('same offers ', sameOffersLength, ' offers');
console.log(sameOffers);

//write result to string
const offersNewString= resultNewOffersUnique.join(',');
document.writeln(offersNewString);
