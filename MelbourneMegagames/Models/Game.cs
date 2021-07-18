using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Text;

namespace MelbourneMegagames.Models
{
    /// <summary>
    /// This class represents one game entry that MM would run. Is uses methods derived from here: https://github.com/madskristensen/Miniblog.Core
    /// </summary>
    public class Game
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required, Display(Name = "Date of game"), DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        public DateTime GameDate { get; set; }
        [Required, Display(Name = "About the game")]
        public string GameDescription { get; set; }
        public string Excerpt { get; set; }
        public bool IsPublished { get; set; }

        public string Slug { get; set; } = string.Empty;

        public static string CreateSlug(string title)
        {
            title = title?.ToLower().Replace(Constants.Space, Constants.Dash, StringComparison.OrdinalIgnoreCase) ?? string.Empty;
            title = RemoveDiacritics(title);
            title = RemoveReservedUriCharacters(title);

            return title.ToLowerInvariant();
        }

        public string GetEncodedLink() => $"/games/{System.Net.WebUtility.UrlEncode(this.Slug)}/";

        public string GetLink() => $"/games/{this.Slug}/";

        private static string RemoveDiacritics(string text)
        {
            string normalizedString = text.Normalize(NormalizationForm.FormD);
            var stringBuilder = new StringBuilder();

            foreach (var c in normalizedString)
            {
                var unicodeCategory = CharUnicodeInfo.GetUnicodeCategory(c);
                if (unicodeCategory != UnicodeCategory.NonSpacingMark)
                {
                    stringBuilder.Append(c);
                }
            }

            return stringBuilder.ToString().Normalize(NormalizationForm.FormC);
        }

        private static string RemoveReservedUriCharacters(string text)
        {
            var reservedCharacters = new List<string> { "!", "#", "$", "&", "'", "(", ")", "*", ",", "/", ":", ";", "=", "?", "@", "[", "]", "\"", "%", ".", "<", ">", "\\", "^", "_", "'", "{", "}", "|", "~", "`", "+" };

            foreach (var chr in reservedCharacters)
            {
                text = text.Replace(chr, string.Empty, StringComparison.OrdinalIgnoreCase);
            }

            return text;
        }
    }
}