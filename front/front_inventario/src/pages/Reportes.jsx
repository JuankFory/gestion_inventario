import React from "react";
import Layout from "../Layout.jsx"
import{Bar, Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,LinearScale, BarElement, LineElement, PointElement,
  Title,  Tooltip, Legend, ArcElement} from 'chart.js';
//Registro clave para gráficos
ChartJS.register( CategoryScale, LinearScale, BarElement,LineElement, PointElement,
  Title, Tooltip, Legend, ArcElement);
function Reportes(){



const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'Reportes',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(223, 10, 56)',
      'rgb(8, 27, 241)',
      'rgb(5, 237, 5)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'doughnut',
  data: data,
};
    return(
        
            <div>
                <main className="main-content">
                    <section className="content-area">
                        <div className="">
                            
                            
                            <div style={{ width: '100%', height: '600px' }}>
                                <Doughnut data={data} />
                            </div>
                            


                        </div>
                    </section>
                </main>
            </div>
        
    )
}

export default Reportes;