﻿// <auto-generated />
using System;
using MelbourneMegagames.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MelbourneMegagames.Migrations
{
    [DbContext(typeof(MelbourneMegagamesContext))]
    partial class MelbourneMegagamesContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MelbourneMegagames.Models.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Excerpt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("GameDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("GameDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsPublished")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Slug")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Games");

                    b.HasData(
                        new
                        {
                            Id = new Guid("b2bac344-009a-4189-98a7-93fd3b4a445d"),
                            GameDate = new DateTime(2019, 8, 24, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameDescription = @"The year is 2025, and the existence of extra-terrestrials has been known about within intelligence circles for well over 50 years. Notwithstanding one or two minor incidents, relations with Earth's newest species of parasite have been tolerably mild.
Until now.
The last few years have seen a rise in alien activity, and the world's leaders are growing increasingly nervous. Sightings have escalated to epidemic proportions, and people are beginning to question governments' keen insistence that there is no such thing as an ""extra-terrestrial"".
You, the world leaders, must act. Something must be done to curb this invasion.
It is time... to Watch the Skies.",
                            IsPublished = false,
                            Name = "Watch the Skies - Melbourne Premiere!",
                            Slug = ""
                        },
                        new
                        {
                            Id = new Guid("e3cd90bc-078a-49f0-af3d-eb9275e6d04f"),
                            GameDate = new DateTime(2019, 11, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameDescription = @"Queen Sovende, last of her bloodline and sovereign of Wruicia, is dead. No sooner than the end of her funereal procession and now the cogs of a once divided and diverse land are coming to life.
The continental empire of Wruicia, consolidated over decades of both bloody and peaceful reign by the ruling dynasty, now sits on the brink of chaos and carnage.
Uncertainty lingers in the air for nobility and peasantry alike as the territorial walls that long ago towered high over the land begin to reappear, casting anew shadows that once divide these lands.All the while, unchecked by any united front, agents of opportunistic foreign nations are cautiously prodding at the falling empire’s borders.
An era of change, perhaps one of turmoil and evolution, is dawning for the continent of Wruicia.
Ultimately, its fate rests in your hands.
For the Crown is a Megagame about politics, intrigue and war.It's set in a fictional 18th century realm called Wruicia. Players take on the roles of political and military leaders within a number of key factions across this world, ultimately guiding their people to prosperity or doom!
Melbourne Megagames, in collaboration with the University of Melbourne Tabletop Gaming Society will be running the megagame For the Crown at the University of Melbourne.",
                            IsPublished = false,
                            Name = "For the Crown",
                            Slug = ""
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
