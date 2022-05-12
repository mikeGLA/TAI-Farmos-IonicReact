import React, {useState, useEffect} from 'react'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

export const LineChart = () => {

    const [coinChart, setcoinChart] = useState([])

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var apiKey = "coinranking2bc5895aeb996f7c19efa6318027bcc4266f5c4a98bc2801";

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${apiKey}`,
                    "Access-Control-Allow-Origin" : "*"
                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setcoinChart(json.data)
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])

    const data = {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            label: "Water Price" ,
            data: coinChart?.coins?.map(a=>a.change),
            borderColor: "rgba(0, 156, 255, 1)",
            borderWidth: 3
        },
        {
            label: "Electricity Price",
            data: coinChart?.coins?.map(b=>b.btcPrice),
            borderColor: "rgba(220, 37, 125, 1)",
            borderWidth: 3
        }
      ]
    }
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
                y: {
                  beginAtzero: true,
                }
            },
            legend: {
                labels: {
                    frontSize: 50
                }
            },

            // เป็นเหี้ยไรไม่รู้ไตเติ้ลไม่ยอมขึ้น

            plugins:{
              title:{
                display: true,
                text: "Resource Consumption",
              }
            }

        }
  return (
      <>
        <div>
            <Line
                data={data}
                height={240}
                options={options}
            
            />



        </div>
      
      </>

  )
}

export default LineChart;