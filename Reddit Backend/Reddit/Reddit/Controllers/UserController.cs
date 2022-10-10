using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reddit.DAL;
using Reddit.Models;
using Reddit.ViewModels;
using System.Threading.Tasks;

namespace Reddit.Controllers
{
    public class UserController : Controller
    {
        private readonly AppDbContext context;

        public UserController(AppDbContext context)
        {
            this.context = context;
        }
        public async Task<IActionResult> Index()
        {

            HomeVM homeVM = new HomeVM
            {
                posts = await context.posts.ToListAsync()
            };
            return View(homeVM);
        }

        public async Task<IActionResult> Profil(int id)
        {

            Post post = await context.posts.FirstOrDefaultAsync(i => i.Id == id);
            Post post1 = new Post
            {
               ProfilImage = post.ProfilImage,
               ProfilTitle = post.ProfilTitle,
               Image = post.Image,
               Video = post.Video,
            };
            post1.ProfilTitle = post.ProfilTitle;
            post1.ProfilImage = post.ProfilImage;
            HomeVM homeVM = new HomeVM
            {
                posts = await context.posts.ToListAsync()
            };
            return View(homeVM);
        }
    }
}

