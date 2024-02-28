using Microsoft.AspNetCore.Mvc;
using AngularWithASP.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularWithASP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BooksController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var books = await _context.Books.ToListAsync();
            if (books == null || !books.Any())
            {
                return NotFound("No books found.");
            }
            return Ok(books);
        }
        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Books.Add(book);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = book.Id }, book);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound(); // Returns a 404 if the book is not found
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return NoContent(); // Returns a 204 No Content
        }
    }
}
