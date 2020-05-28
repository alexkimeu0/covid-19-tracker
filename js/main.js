$(document).ready(() => {
  getData();
});

function getData() {
  axios
    .get("https://api.covid19api.com/summary")
    .then((res) => {
      let global = res.data.Global;
      console.log(global);

      let ouput = `
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Global Data in Summary</h4>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item heading">Global Total</li>
                                <li class="list-group-item"><strong>Total Confirmed:</strong>&nbsp;${global.TotalConfirmed}</li>
                                <li class="list-group-item"><strong>Total Deaths:</strong>&nbsp;${global.TotalDeaths}</li>
                                <li class="list-group-item"><strong>Total Recovered:</strong>&nbsp;${global.TotalRecovered}</li>                                
                            </ul>
                        </div>

                        <div class="col-md-6">
                            <ul class="list-group">  
                                <li class="list-group-item heading">Global New</li>  
                                <li class="list-group-item"><strong>New Confirmed:</strong>&nbsp;${global.NewConfirmed}</li>
                                <li class="list-group-item"><strong>New Deaths:</strong>&nbsp;${global.NewDeaths}</li>
                                <li class="list-group-item"><strong>New Recovered:</strong>&nbsp;${global.NewRecovered}</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
      `;

      $("#global-data").html(ouput);
    })
    .catch((err) => console.log(err));
}
