// Smooth scroll to top
document.querySelector(".scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Search functionality
const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim()) {
    alert("🔍 Tìm kiếm: " + searchInput.value);
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && searchInput.value.trim()) {
    alert("🔍 Tìm kiếm: " + searchInput.value);
  }
});

// Add to cart functionality
document.querySelectorAll(".btn-add-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector(".product-name").textContent;
    const productPrice =
      productCard.querySelector(".current-price").textContent;

    // Update cart badge
    const cartBadge = document.querySelector(".icon-item:last-child .badge");
    let currentCount = parseInt(cartBadge.textContent);
    cartBadge.textContent = currentCount + 1;

    // Animation
    cartBadge.style.animation = "none";
    setTimeout(() => {
      cartBadge.style.animation = "pulse 0.5s";
    }, 10);

    alert(
      "✅ Đã thêm vào giỏ hàng!\n\n" + productName + "\nGiá: " + productPrice
    );
  });
});

// Category tabs
document.querySelectorAll(".category-tabs button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent = e.target.closest(".category-tabs");
    parent
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Video play
document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector(".video-title").textContent;
    alert("▶️ Đang phát video:\n\n" + title);
  });
});

// Floating chat
document.querySelector(".floating-chat").addEventListener("click", () => {
  alert(
    "💬 Tính năng chat đang được phát triển!\n\nChúng tôi sẽ sớm có mặt để hỗ trợ bạn."
  );
});

// Floating support
document.querySelector(".floating-support").addEventListener("click", () => {
  alert(
    "📞 Hotline hỗ trợ: 1900 6750\n\n⏰ Thời gian làm việc:\nT2 - T7: 8:00 - 21:00\nCN: 8:00 - 18:00"
  );
});

// Notification bell
document.querySelector(".notification-bell").addEventListener("click", () => {
  alert(
    "🔔 Bạn có 3 thông báo mới:\n\n1. 🎉 Giảm 20% cho sản phẩm rau củ\n2. 🚚 Miễn phí vận chuyển đơn từ 200k\n3. ⭐ Tích điểm nhận quà hấp dẫn"
  );
});

// Language button
document.querySelector(".lang-btn").addEventListener("click", () => {
  alert("🌐 Chọn ngôn ngữ:\n🇻🇳 Tiếng Việt\n🇬🇧 English");
});

// CTA Button
document.querySelector(".cta-button").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".products-section").offsetTop - 100,
    behavior: "smooth",
  });
});

// Countdown timer
function updateCountdown() {
  const countdownItems = document.querySelectorAll(".countdown-item .number");
  const targetDate = new Date("2025-12-31").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (countdownItems[0]) countdownItems[0].textContent = days;
    if (countdownItems[1]) countdownItems[1].textContent = hours;
    if (countdownItems[2]) countdownItems[2].textContent = minutes;
    if (countdownItems[3]) countdownItems[3].textContent = seconds;
  }, 1000);
}

updateCountdown();

// Category cards hover effect
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    const categoryName = card.querySelector("h3").textContent;
    alert("📦 Danh mục: " + categoryName + "\n\nĐang tải sản phẩm...");
  });
});

// Product quick view
document.querySelectorAll(".btn-quick-view").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector(".product-name").textContent;
    alert("👁️ Xem nhanh:\n\n" + productName);
  });
});

// News cards
document.querySelectorAll(".news-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector(".news-title").textContent;
    alert("📰 Đọc bài viết:\n\n" + title);
  });
});

// Partner logos
document.querySelectorAll(".partner-logo").forEach((logo) => {
  logo.addEventListener("click", () => {
    alert("🤝 Đối tác: " + logo.textContent);
  });
});

// Show scroll top button when scrolling
window.addEventListener("scroll", () => {
  const scrollTop = document.querySelector(".scroll-top");
  if (window.scrollY > 300) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
});

// Initial hide scroll button
document.querySelector(".scroll-top").style.display = "none";

// Animate on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe product cards
document
  .querySelectorAll(".product-card, .category-card, .news-card")
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";
    observer.observe(card);
  });

// Add pulse animation
const style = document.createElement("style");
style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.3); }
            }
        `;
document.head.appendChild(style);

console.log("🌱 KANOHA Website loaded successfully!");
console.log("📞 Contact: 0794704856");
console.log("🌐 Website: https://bean-farm.mysapo.net/");

document.addEventListener("DOMContentLoaded", function () {
  const ph = "https://via.placeholder.com/600x400?text=No+Image";
  document.querySelectorAll("img").forEach((img) => {
    // lazy loading for performance
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    // fallback on error
    img.addEventListener(
      "error",
      function () {
        if (this.src !== ph) this.src = ph;
      },
      { once: true }
    );
  });
});

(function () {
  function text(el, s) {
    if (el) el.textContent = s;
  }
  function show(el) {
    el && (el.style.display = "flex");
  }
  function hide(el) {
    el && (el.style.display = "none");
  }
  const overlay = document.getElementById("qvOverlay");
  const qvTitle = document.getElementById("qvTitle");
  const qvImg = document.getElementById("qvImg");
  const qvPrice = document.getElementById("qvPrice");
  const qvDesc = document.getElementById("qvDesc");
  document
    .getElementById("qvClose")
    ?.addEventListener("click", () => hide(overlay));
  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) hide(overlay);
  });

  function findHeaderFavBadge() {
    // 3rd .icon-item is Yêu thích (in supplied header). Adjust if needed.
    return document.querySelector(
      ".header-icons .icon-item:nth-child(3) .badge"
    );
  }
  function getFavTotal() {
    try {
      return Math.max(
        0,
        parseInt(localStorage.getItem("favTotal") || "0", 10) || 0
      );
    } catch (e) {
      return 0;
    }
  }
  function setFavTotal(n) {
    n = Math.max(0, n | 0);
    localStorage.setItem("favTotal", String(n));
    const badge =
      findHeaderFavBadge() || document.querySelector("[data-fav-badge]");
    if (badge) badge.textContent = String(n);
  }
  // per-item state: a simple object map {id:true}
  function getFavSet() {
    try {
      return JSON.parse(localStorage.getItem("favSet") || "{}");
    } catch (e) {
      return {};
    }
  }
  function setFavSet(obj) {
    localStorage.setItem("favSet", JSON.stringify(obj || {}));
  }
  function productId(card) {
    return (
      card.querySelector(".product-name")?.textContent?.trim() ||
      card.querySelector("img.product-image")?.alt ||
      ""
    ).trim();
  }

  // init header badge and heart states
  (function init() {
    // badge
    setFavTotal(getFavTotal());
    // hearts
    const set = getFavSet();
    document.querySelectorAll(".product-card").forEach((card) => {
      const id = productId(card);
      const heart = card.querySelector(".qa-heart");
      if (!heart) return;
      if (set[id]) heart.classList.add("hearted");
      else heart.classList.remove("hearted");
    });
  })();

  function openQuick(card) {
    const img = card.querySelector("img.product-image");
    const name =
      card.querySelector(".product-name")?.textContent?.trim() || "Sản phẩm";
    const price =
      card.querySelector(".current-price")?.textContent?.trim() || "";
    const desc = "Sản phẩm tươi sạch, giao nhanh trong ngày.";
    if (img) qvImg.src = img.src;
    text(qvTitle, name);
    text(qvPrice, price);
    text(qvDesc, desc);
    show(overlay);
  }

  function toggleFavorite(heartBtn) {
    const card = heartBtn.closest(".product-card");
    const id = productId(card) || Math.random().toString(36).slice(2);
    let total = getFavTotal();
    let set = getFavSet();
    if (heartBtn.classList.contains("hearted")) {
      // remove favorite => total -1 (not below 0)
      heartBtn.classList.remove("hearted");
      if (set[id]) {
        delete set[id];
        total = Math.max(0, total - 1);
      }
      toast("Đã bỏ yêu thích");
    } else {
      // add favorite => total +1
      heartBtn.classList.add("hearted");
      if (!set[id]) {
        set[id] = true;
        total = total + 1;
      }
      toast("Đã thêm yêu thích");
      // burst
      heartBtn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.2)" },
          { transform: "scale(1)" },
        ],
        { duration: 250, easing: "ease-out" }
      );
    }
    setFavSet(set);
    setFavTotal(total);
  }

  function toast(msg) {
    let t = document.getElementById("favToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "favToast";
      t.style.cssText =
        "position:fixed;right:18px;bottom:18px;background:#10b981;color:#fff;padding:10px 14px;border-radius:999px;box-shadow:0 10px 30px rgba(0,0,0,.2);z-index:99999";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    clearTimeout(t._to);
    t._to = setTimeout(() => {
      if (t) t.remove();
    }, 1200);
  }

  // Delegation for eye/heart
  document.addEventListener(
    "click",
    function (e) {
      const eye = e.target.closest(".qa-eye");
      if (eye) {
        e.preventDefault();
        e.stopPropagation();
        const card = eye.closest(".product-card");
        if (card) openQuick(card);
        return;
      }
      const heart = e.target.closest(".qa-heart");
      if (heart) {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(heart);
        return;
      }
    },
    false
  );
})();
