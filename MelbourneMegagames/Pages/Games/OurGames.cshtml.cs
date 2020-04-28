using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MelbourneMegagames.Data;
using MelbourneMegagames.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace MelbourneMegagames.Pages.Games
{
    public class OurGamesModel : PageModel
    {
        private MelbourneMegagamesContext _context;

        public OurGamesModel(MelbourneMegagamesContext context)
        {
            _context = context;
        }

        [BindProperty]
        public List<Game> games { get; set; }
        public async void OnGetAsync()
        {
            games = await _context.Games.ToListAsync<Game>();
        }
    }
}