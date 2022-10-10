using Microsoft.EntityFrameworkCore;
using Reddit.Models;

namespace Reddit.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }

        public DbSet<Post> posts { get; set; }
    }
}
