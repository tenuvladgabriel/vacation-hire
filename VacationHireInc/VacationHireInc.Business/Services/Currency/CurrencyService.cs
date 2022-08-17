using System.Collections.Generic;using System.Linq;using System.Net.Http;using System.Threading.Tasks;using Newtonsoft.Json;using VacationHireInc.Business.Abstractions;using VacationHireInc.Business.Services.Currency.Dtos;using VacationHireInc.Business.Services.GeneralDtos;namespace VacationHireInc.Business.Services.Currency{    public class CurrencyService : ICurrencyService    {        private readonly IHttpClientFactory _httpClientFactory;        private const string ClientName = "Currency";        private const string ActualCurrency = "USD";        public CurrencyService(IHttpClientFactory httpClientFactory)        {            _httpClientFactory = httpClientFactory;        }        public async Task<List<OptionDto>> GetListAsync()        {            return (await GetAsync<CurrencyListDto>("currency_data/list"))                .Currencies.Select(c => new OptionDto                {                    Name = c.Value,                    Value = c.Key                })                .ToList();        }        public async Task<double> ConvertCurrencyAsync(double amount, string currencyForConvert)        {            if (currencyForConvert == ActualCurrency)            {                return amount;            }            return (await GetAsync<CurrencyConvertDto>($"currency_data/convert?to={ActualCurrency}&from={currencyForConvert}&amount={amount}"))                .Result;        }        private async Task<T> GetAsync<T>(string url) where T : class        {            var response = await _httpClientFactory.CreateClient(ClientName).GetStringAsync(url);            return JsonConvert.DeserializeObject<T>(response);        }    }}