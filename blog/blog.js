// buat variabel untuk menampung data blog didalam array kosong
let blogs = []; //data array

// function : untuk membuat suatu fungsi/perintah untuk aplikasi
function addBlog(event) {
  event.preventDefault(); // mencegah halaman refresh

  // variable title menyimpan data dari inputan title di form
  let title = document.getElementById("input-blog-title").value; //data tunggal
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]); //untuk ngambil data gambar

  // data objek
  const blog = {
    title: title,
    content: content,
    image: image,
    author: "fufufafa",
    postAt: new Date(),
  };

  blogs.push(blog);

  console.log(blogs);

  renderBlog();
}

// fungsi untuk merender content blog ke blog list
function renderBlog() {
  // akses elemen dengan id contents
  let contentContainer = document.getElementById("contents");

  contentContainer.innerHTML = ""; // untuk inject/menyisipkan elemen html

  //   looping setiap data di array(blogs) dan tampilkan ke dalam bentuk html
  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
    <div id="contents" class="blog-list">
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="blog image" />
        </div>
        <div class="blog-content">
          <h1>${blogs[i].title}</h1>
          <span class="detail-blog-content"> 20 Nov 2024 09:00 | ${blogs[i].author} </span>
          <p>
            ${blogs[i].content}
          </p>
        </div>
        </div>
      </div>
    `;
  }
}
