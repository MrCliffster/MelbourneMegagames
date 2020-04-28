using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MelbourneMegagames.Models;

namespace MelbourneMegagames.Data
{
    public class MelbourneMegagamesContext : DbContext
    {
        public MelbourneMegagamesContext (DbContextOptions<MelbourneMegagamesContext> options)
            : base(options)
        {
        }

        public DbSet<Game> Games { get; set; }
    }
}
