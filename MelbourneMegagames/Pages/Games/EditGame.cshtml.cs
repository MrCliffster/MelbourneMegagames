using MelbourneMegagames.Data;
using MelbourneMegagames.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MelbourneMegagames.Pages.Games
{
    public class EditGameModel : PageModel
    {
        private readonly MelbourneMegagamesContext _context;

        public EditGameModel(MelbourneMegagamesContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Game Game { get; set; }

        public IActionResult OnGet()
        {
            return Page();
        }

        public IActionResult OnPostAsync()
        {
            return RedirectToPage("OurGames");
        }

    }
}