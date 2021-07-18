using MelbourneMegagames.Data;
using MelbourneMegagames.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MelbourneMegagames.Pages.Games
{
    public class OurGamesModel : PageModel
    {
        private readonly MelbourneMegagamesContext _context;

        public OurGamesModel(MelbourneMegagamesContext context)
        {
            _context = context;
        }

        [BindProperty]
        public List<Game> Games { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            Games = await _context.Games.ToListAsync<Game>();
            return Page();
        }
    }
}
