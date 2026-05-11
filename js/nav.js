// js/nav.js — sidebar navigation active state + search
(function() {
  'use strict';

  // Highlight current page in sidebar
  var currentPath = window.location.pathname;
  var links = document.querySelectorAll('.nav-link');

  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.indexOf(href) === 0)) {
      link.classList.add('active');
    }
  });

  // Search filter (if search input exists)
  var searchInput = document.getElementById('nav-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var query = searchInput.value.toLowerCase();
      links.forEach(function(link) {
        var text = link.textContent.toLowerCase();
        link.style.display = text.indexOf(query) !== -1 ? '' : 'none';
      });
    });
  }
})();
