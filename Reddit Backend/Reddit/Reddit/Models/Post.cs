using System.Collections.Generic;

namespace Reddit.Models
{
    public class Post
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string UserImage { get; set; }

        public string Title { get; set; }

        public string Video { get; set; }

        public string Image { get; set; }

        public string ProfilImage { get; set; }

        public string ProfilTitle { get; set; }
    }
}
