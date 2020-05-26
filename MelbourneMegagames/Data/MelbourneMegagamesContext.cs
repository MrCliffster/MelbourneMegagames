using MelbourneMegagames.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace MelbourneMegagames.Data
{
    public class MelbourneMegagamesContext : DbContext
    {
        public MelbourneMegagamesContext(DbContextOptions<MelbourneMegagamesContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().HasData(new List<Game> {
            new Game
            {
                Id = Guid.NewGuid(),
                Name = "Watch the Skies - Melbourne Premiere!",
                GameDate = new DateTime(2019, 8, 24),
                GameDescription = "The year is 2025, and the existence of extra-terrestrials has been known about within intelligence circles for well over 50 years. Notwithstanding one or two minor incidents, relations with Earth's newest species of parasite have been tolerably mild.\nUntil now.\nThe last few years have seen a rise in alien activity, and the world's leaders are growing increasingly nervous. Sightings have escalated to epidemic proportions, and people are beginning to question governments' keen insistence that there is no such thing as an \"extra-terrestrial\".\nYou, the world leaders, must act. Something must be done to curb this invasion.\nIt is time... to Watch the Skies."

            },
            new Game
            {
                Id = Guid.NewGuid(),
                Name = "For the Crown",
                GameDate = new DateTime(2019, 11, 30),
                GameDescription = "Queen Sovende, last of her bloodline and sovereign of Wruicia, is dead. No sooner than the end of her funereal procession and now the cogs of a once divided and diverse land are coming to life.\nThe continental empire of Wruicia, consolidated over decades of both bloody and peaceful reign by the ruling dynasty, now sits on the brink of chaos and carnage.\nUncertainty lingers in the air for nobility and peasantry alike as the territorial walls that long ago towered high over the land begin to reappear, casting anew shadows that once divide these lands.All the while, unchecked by any united front, agents of opportunistic foreign nations are cautiously prodding at the falling empire’s borders.\nAn era of change, perhaps one of turmoil and evolution, is dawning for the continent of Wruicia.\nUltimately, its fate rests in your hands.\nFor the Crown is a Megagame about politics, intrigue and war.It's set in a fictional 18th century realm called Wruicia. Players take on the roles of political and military leaders within a number of key factions across this world, ultimately guiding their people to prosperity or doom!\nMelbourne Megagames, in collaboration with the University of Melbourne Tabletop Gaming Society will be running the megagame For the Crown at the University of Melbourne."
            },
            });
        }

        public DbSet<Game> Games { get; set; }
    }

}
