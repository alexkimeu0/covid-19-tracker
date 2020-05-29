const home_url = "https://api.covid19api.com";
const countries_url = "https://api.covid19api.com/countries";
const country_url = "https://api.covid19api.com/live/country/";
let countries_slugs = [];

$(document).ready(() => {
  getData();
  getCountries();
  getCountryData();
});

function getData() {
  axios
    .get(`${home_url}/summary`)
    .then((res) => {
      let global = res.data.Global;
      console.log(global);

      let output = `
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

      $("#global-data").html(output);
    })
    .catch((err) => console.log(err));
}

function getCountries() {
  axios.get(`${countries_url}`).then((res) => {
    let countries = res.data;

    for (let i = 0; i < countries.length; i++) {
      let slug = countries[i].Slug;
    }
  });
}

function getCountryData(slug) {
  axios.get(`https://api.covid19api.com/total/country/${slug}`).then((res) => {
    let output = "";
    let data = res.data;
  });
}

//console.log(countries_slugs);
