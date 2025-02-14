
// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      groupBody.classList.toggle('open');
  
      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });
  

  // Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });

  // Get modal elements
const walletModal = document.getElementById('walletModal');
const walletButtons = document.querySelectorAll('.btn-light');
const closeButton = document.querySelector('.wallet-close-button');
const walletOptions = document.querySelectorAll('.wallet-option');

// Open modal when "Connect Wallet" buttons are clicked
walletButtons.forEach(button => {
  if (button.textContent.includes('Connect Wallet')) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      walletModal.style.display = 'block';
    });
  }
});

// Close modal when the close button is clicked
closeButton.addEventListener('click', () => {
  walletModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === walletModal) {
    walletModal.style.display = 'none';
  }
});

// Handle wallet option selection
walletOptions.forEach(option => {
  option.addEventListener('click', () => {
    const walletType = option.getAttribute('data-wallet');
    // Here you would typically integrate with the chosen wallet
    // For demonstration, we'll just log the selection
    console.log(`Selected wallet: ${walletType}`);
    alert(`You selected ${walletType} wallet. Connecting...`);
    walletModal.style.display = 'none';
  });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const walletModal = document.getElementById('walletModal');
    const closeButton = document.querySelector('.wallet-close-button');
    const walletOptions = document.querySelectorAll('.wallet-option');
    
    // Get all wallet connect buttons, including the one in the mobile menu
    const desktopWalletButtons = document.querySelectorAll('.main-menu .btn-light');
    const mobileWalletButton = document.querySelector('.mobile-menu .btn:has(i.fas.fa-wallet)');
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Function to open wallet modal
    function openWalletModal(e) {
      e.preventDefault();
      walletModal.style.display = 'block';
      
      // If opened from mobile menu, close the mobile menu
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
    }
    
    // Add event listeners to desktop wallet buttons
    desktopWalletButtons.forEach(button => {
      button.addEventListener('click', openWalletModal);
    });
    
    // Add event listener to mobile wallet button
    if (mobileWalletButton) {
      mobileWalletButton.addEventListener('click', openWalletModal);
    }
    
    // Close modal when the close button is clicked
    closeButton.addEventListener('click', () => {
      walletModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === walletModal) {
        walletModal.style.display = 'none';
      }
    });
    
    // Handle wallet option selection
    walletOptions.forEach(option => {
      option.addEventListener('click', () => {
        const walletType = option.getAttribute('data-wallet');
        // Here you would typically integrate with the chosen wallet
        console.log(`Selected wallet: ${walletType}`);
        alert(`You selected ${walletType} wallet. Connecting...`);
        walletModal.style.display = 'none';
      });
    });
    
    // Your existing hamburger button code is already handling the mobile menu toggle
    // No need to duplicate it here
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Get wallet modal elements
    const walletModal = document.getElementById('walletModal');
    const closeButton = document.querySelector('.wallet-close-button');
    const walletOptions = document.querySelectorAll('.wallet-option');
    
    // Get the Create Trust button
    const createTrustButton = document.querySelector('.btn-light:has(i.fas.fa-coins)');
    
    // Function to open wallet modal
    function openWalletModal(e) {
      e.preventDefault();
      walletModal.style.display = 'block';
    }
    
    // Add event listener to the Create Trust button
    if (createTrustButton) {
      createTrustButton.addEventListener('click', openWalletModal);
    }
    
    // Close modal when the close button is clicked
    closeButton.addEventListener('click', () => {
      walletModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === walletModal) {
        walletModal.style.display = 'none';
      }
    });
    
    // Handle wallet option selection
    walletOptions.forEach(option => {
      option.addEventListener('click', () => {
        const walletType = option.getAttribute('data-wallet');
        console.log(`Selected wallet: ${walletType}`);
        alert(`You selected ${walletType} wallet for creating a trust. Connecting...`);
        walletModal.style.display = 'none';
      });
    });
  });

//Start Saving icon Wallet Modal

  document.addEventListener('DOMContentLoaded', function() {
    // Get wallet modal elements
    const walletModal = document.getElementById('walletModal');
    const closeButton = document.querySelector('.wallet-close-button');
    const walletOptions = document.querySelectorAll('.wallet-option');
    
    // Get the Create Trust button
    const createTrustButton = document.querySelector('.btn-primary:has(i.fas.fa-piggy-bank)');
    
    // Function to open wallet modal
    function openWalletModal(e) {
      e.preventDefault();
      walletModal.style.display = 'block';
    }
    
    // Add event listener to the Create Trust button
    if (createTrustButton) {
      createTrustButton.addEventListener('click', openWalletModal);
    }
    
    // Close modal when the close button is clicked
    closeButton.addEventListener('click', () => {
      walletModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === walletModal) {
        walletModal.style.display = 'none';
      }
    });
    
    // Handle wallet option selection
    walletOptions.forEach(option => {
      option.addEventListener('click', () => {
        const walletType = option.getAttribute('data-wallet');
        console.log(`Selected wallet: ${walletType}`);
        alert(`You selected ${walletType} wallet for creating a trust. Connecting...`);
        walletModal.style.display = 'none';
      });
    });
  });

//Phantom Wallet Connection through the Wallet Modal

  document.addEventListener('DOMContentLoaded', function() {
    // Get wallet modal elements
    const walletModal = document.getElementById('walletModal');
    const closeButton = document.querySelector('.wallet-close-button');
    const walletOptions = document.querySelectorAll('.wallet-option');
    
    // Function to connect Solana wallet
    async function connectSolanaWallet() {
      if (window.solana && window.solana.isPhantom) {
        try {
          const response = await window.solana.connect();
          const walletAddress = response.publicKey.toString();
          console.log("Connected Solana wallet:", walletAddress);
          
          // You can update UI here to show connected state
          alert(`Successfully connected Phantom wallet: ${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`);
          return walletAddress;
        } catch (err) {
          console.error("Wallet connection failed:", err);
          alert("Failed to connect Phantom wallet. " + err.message);
        }
      } else {
        alert("Phantom wallet not found. Please install Phantom from https://phantom.app/");
        window.open("https://phantom.app/", "_blank");
      }
    }
    
    // Handle wallet option selection
    walletOptions.forEach(option => {
      option.addEventListener('click', async () => {
        const walletType = option.getAttribute('data-wallet');
        
        if (walletType === 'phantom') {
          // Close modal before attempting connection
          walletModal.style.display = 'none';
          // Connect to Phantom wallet
          await connectSolanaWallet();
        } else {
          // Handle other wallet types
          console.log(`Selected wallet: ${walletType}`);
          alert(`You selected ${walletType} wallet. This wallet type is not yet implemented.`);
          walletModal.style.display = 'none';
        }
      });
    });

    
    // Close modal when the close button is clicked
    closeButton.addEventListener('click', () => {
      walletModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === walletModal) {
        walletModal.style.display = 'none';
      }
    });
  });



  
