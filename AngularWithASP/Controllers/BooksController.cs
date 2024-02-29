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
        //Get all books GET : api/books
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
        //Get book by id GET : api/books/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookById(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
        //Get book by author GET: api/Books/ByAuthor?authorName=AuthorName
        [HttpGet("ByAuthor")]
        public async Task<ActionResult<IEnumerable<Book>>> GetBookByAuthor(string authorName)
        {
            if (string.IsNullOrEmpty(authorName))
            {
                return BadRequest("Author name is required ");
            }
            var books = await _context.Books
                .Where(b => b.Author.Contains(authorName))
                .ToListAsync();

            if(books == null)
            {
                return NotFound($"No books found for author: {authorName}.");
            }

            return books;
        }
        //Get book by title GET: api/Books/ByTitle?titleName=TitleName
        [HttpGet("ByTitle")]
        public async Task<ActionResult<IEnumerable<Book>>> GetBookByTitle(string titleName)
        {
            if (string.IsNullOrEmpty(titleName))
            {
                return BadRequest("Author name is required ");
            }
            var books = await _context.Books
                .Where(b => b.Title.Contains(titleName))
                .ToListAsync();

            if(books == null)
            {
                return NotFound($"No books found for title: {titleName}.");
            }

            return books;
        }
        //Create new book POST : api/books <<{Json}
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
        //Delete book by id DELETE : api/books/id
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
        //Edit book by id PUT : api/books/id
        [HttpPut("{id}")]
        public async Task<IActionResult> EditBook(int id, [FromBody] Book bookUpdate)
        {
            if (id != bookUpdate.Id)
            {
                return BadRequest("ID mismatch");
            }
            var book = await _context.Books.FindAsync(id);
            
            if(book == null)
            {
                return NotFound(); //Error 404
            }

            book.Title = bookUpdate.Title;
            book.Author = bookUpdate.Author;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (! _context.Books.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
    }
}
