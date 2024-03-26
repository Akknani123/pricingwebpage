document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (e) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.top = (e.pageY - 5) + "px";
      sparkle.style.left = (e.pageX - 5) + "px";
      document.body.appendChild(sparkle);
      setTimeout(function () {
        document.body.removeChild(sparkle);
      }, 2000);
    });
  });

$(document).ready(function() {
    $('.btn-toggle .btn').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('#inrbtn').click(function() {
      updatePrices('INR');
    });
    
    $('#usdbtn').click(function() {
      updatePrices('USD');
    });
    
    function updatePrices(currency) {
      $('.subscribe-btn').each(function() {
        var price = currency === 'INR' ? $(this).data('price-inr') : $(this).data('price-usd');
        $(this).text('Subscribe Now - ' + (currency === 'INR' ? '₹' : '$') + price);
     });
    }
  });


  const searchData = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Mango",
    "Kiwi",
    "Peach"
  ];

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchList = document.getElementById("searchList");

  // Function to filter search results
  function filterResults() {
    const searchText = searchInput.value.toLowerCase();
    const filteredResults = searchData.filter(item => item.toLowerCase().includes(searchText));
    displayResults(filteredResults);
  }

  // Function to display search results
  function displayResults(results) {
    searchList.innerHTML = "";
    results.forEach(result => {
      const li = document.createElement("li");
      li.textContent = result;
      li.addEventListener("click", () => {
        searchInput.value = result;
        searchResults.style.display = "none";
      });
      searchList.appendChild(li);
    });
    if (results.length > 0) {
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  }

  // Event listener for search input
  searchInput.addEventListener("input", filterResults);

  // Event listener for search button (optional)
  document.getElementById("searchButton").addEventListener("click", filterResults);


  