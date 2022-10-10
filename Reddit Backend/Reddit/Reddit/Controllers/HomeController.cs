using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reddit.DAL;
using Reddit.ViewModels;
using System.Threading.Tasks;

namespace Reddit.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext context;

        public HomeController(AppDbContext context)
        {
            this.context = context;
        }
        public async Task<IActionResult> Index()
        {
            HomeVM homeVM = new HomeVM
            {
                posts = await context.posts.ToListAsync(),
            };
            return View(homeVM);
        }

    }
}
