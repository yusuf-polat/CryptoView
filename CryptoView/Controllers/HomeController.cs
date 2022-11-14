using api.Models;
using CryptoView.Models;
using System.Web.Mvc;

namespace CryptoView.Controllers
{
    public class HomeController : Controller
    {
        dal mydal=new dal();
        public ActionResult Index(string symbol)
        {
            ViewBag.symbol = null;
            if (!string.IsNullOrEmpty(symbol))
            {
                ViewBag.symbol = symbol;
            }

            return View();
        }
      


    }
}