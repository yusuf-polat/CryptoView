using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace CryptoView.Models
{
    public class NewsApi
    {
        public static string GetApiData(string Search)
        {
            string[] Keyler = {""};
            Random rastgelesayi = new Random();
            int no = rastgelesayi.Next(0, Keyler.Length);
            string apiUrl = "https://gnews.io/api/v4/search?q=" + Search + "&token=" + Keyler[no] + "&lang=en";
            Uri url = new Uri(apiUrl);
            WebClient client = new WebClient();
            client.Encoding = System.Text.Encoding.UTF8;
            string json = client.DownloadString(url);
            return json;


        }
    }
}