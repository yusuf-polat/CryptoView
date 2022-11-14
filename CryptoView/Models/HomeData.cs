using System;
using api.Models;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Net;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace CryptoView.Models
{
    public class HomeData
    {
        dal mydal = new dal();
        public async Task Index(string bySoruce = null)
        {
            Debug.WriteLine($@"

HomeData.Index runned{bySoruce}

at {DateTime.Now.ToLongTimeString()}


");

            foreach (var bilgi in await GetApiDataAsync())
            {
                string kontrol = $"SELECT symbol, priceChange, priceChangePercent, weightedAvgPrice, prevClosePrice, lastPrice, lastQty, bidPrice, bidQty, askPrice, askQty, openPrice, highPrice, lowPrice, volume, quoteVolume, openTime, closeTime, firstId, lastId, countb FROM  [binanceapi] where symbol = '{bilgi.symbol}' or priceChange = '{bilgi.priceChange}' or priceChangePercent = '{bilgi.priceChangePercent}' or weightedAvgPrice = '{bilgi.weightedAvgPrice}' or prevClosePrice = '{bilgi.prevClosePrice}' or lastPrice = '{bilgi.lastPrice}' or lastQty = '{bilgi.lastQty}' or bidPrice = '{bilgi.bidPrice}' or bidQty = '{bilgi.bidQty}' or askPrice = '{bilgi.askPrice}' or askQty = '{bilgi.askQty}' or openPrice = '{bilgi.openPrice}' or highPrice = '{bilgi.highPrice}' or lowPrice = '{bilgi.lowPrice}' or volume = '{bilgi.volume}' or quoteVolume = '{bilgi.quoteVolume}' or openTime = '{bilgi.openTime}' or closeTime = '{bilgi.closeTime}' or firstId = '{bilgi.firstId}' or countb = '{bilgi.count}' ";
                DataSet db_control = mydal.CommandExecuteReader(kontrol, mydal.myConnection);
                if (db_control.Tables[0].Rows.Count > 0)
                {
                    string UPDATE = $"UPDATE binanceapi SET UpdateDate='{DateTime.Now.ToString()}' symbol = '{bilgi.symbol}' , priceChange = '{bilgi.priceChange}' , priceChangePercent = '{bilgi.priceChangePercent}' , weightedAvgPrice = '{bilgi.weightedAvgPrice}' , prevClosePrice = '{bilgi.prevClosePrice}' , lastPrice = '{bilgi.lastPrice}' , lastQty = '{bilgi.lastQty}' , bidPrice = '{bilgi.bidPrice}' , bidQty = '{bilgi.bidQty}' , askPrice = '{bilgi.askPrice}' , askQty = '{bilgi.askQty}' , openPrice = '{bilgi.openPrice}' , highPrice = '{bilgi.highPrice}' , lowPrice = '{bilgi.lowPrice}' , volume = '{bilgi.volume}' , quoteVolume = '{bilgi.quoteVolume}' , openTime = '{bilgi.openTime}' , closeTime = '{bilgi.closeTime}' , firstId = '{bilgi.firstId}' , count = '{bilgi.count}' ";
                    DataSet db_UPDATE = mydal.CommandExecuteReader(UPDATE, mydal.myConnection);
                }
                else
                {

                    string sql = "INSERT INTO binanceapi (symbol, priceChange, priceChangePercent, weightedAvgPrice, prevClosePrice, lastPrice, lastQty, bidPrice, bidQty, askPrice, askQty, openPrice, highPrice, lowPrice, volume, quoteVolume, openTime, closeTime, firstId, lastId, countb) VALUES ('" + bilgi.symbol + "','" + bilgi.priceChange + "', '" + bilgi.priceChangePercent + "','" + bilgi.weightedAvgPrice + "','" + bilgi.prevClosePrice + "','" + bilgi.lastPrice + "','" + bilgi.lastQty + "','" + bilgi.bidPrice + "','" + bilgi.bidQty + "','" + bilgi.askPrice + "','" + bilgi.askQty + "','" + bilgi.openPrice + "','" + bilgi.highPrice + "','" + bilgi.lowPrice + "','" + bilgi.volume + "','" + bilgi.quoteVolume + "','" + bilgi.openTime + "','" + bilgi.closeTime + "','" + bilgi.firstId + "','" + bilgi.lastId + "','" + bilgi.count + "')";
                    DataSet d = mydal.CommandExecuteReader(sql, mydal.myConnection);

                }
            }

        }
        public async Task<List<APIcs>> GetApiDataAsync()
        {

            var apiUrl = "https://api.binance.com/api/v3/ticker/24hr";

            //Connect API
            Uri url = new Uri(apiUrl);
            WebClient client = new WebClient();
            client.Encoding = System.Text.Encoding.UTF8;

            string json = client.DownloadString(url);
            //END

            //JSON Parse START
            JavaScriptSerializer ser = new JavaScriptSerializer();
            List<APIcs> jsonList = ser.Deserialize<List<APIcs>>(json);
            //END

            return jsonList;
        }
    }
}