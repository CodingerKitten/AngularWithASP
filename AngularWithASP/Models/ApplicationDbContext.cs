using Microsoft.EntityFrameworkCore;

namespace AngularWithASP.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Explicitly map the Book entity to the "Book" table
            modelBuilder.Entity<Book>().ToTable("Book");
        }
    }
}
