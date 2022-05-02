(function(window, cust) {
    let currentAcount;

    let Counter;

    let contractInfo = {
        adddress: '0xc21F7e7eF2577B469924fb849fA944fa54E01BB6',
        ABI: [{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"BoxProduced","type":"event"},{"constant":false,"inputs":[{"name":"p","type":"uint256"}],"name":"multiProduce","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"produce","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"getProductCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    };

    cust.initProject = function () {
        connectWalletHandler();
        
        getElementary();

        initializeButtonsMethod();
    }

    function initializeButtonsMethod() {
        let produceBtn = document.getElementById("produce_btn"),
            multiProduceBtn = document.getElementById("multi_produce_btn"),
            viewProductsBtn = document.getElementById("view_products_btn");
        
        if (produceBtn) {
            produceBtn.addEventListener('click', () => {
                var showResaultElement = document.getElementById("produce_resault");
                if (showResaultElement) {
                    let res = Counter.methods.produce().call();
                    // console.log(res);
                    // debugger;
                }
            });
        }
    
        if (multiProduceBtn) {
            multiProduceBtn.addEventListener('click', () => {
                // 
            });
        }
    
        if (viewProductsBtn) {
            viewProductsBtn.addEventListener('click', () => {
                // 
            });
        }
    }

    const connectWalletHandler = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert("please install metamask!")
        }
        
        try {
            const acounts = await ethereum.request({method: 'eth_requestAccounts'});
            currentAcount = acounts[0];

            console.log(acounts);
            console.log(currentAcount);
        } catch (error) {
            console.log(error);
        }
    }

    async function getElementary() {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        // Counter = web3.eth.Contract(contractInfo.ABI, contractInfo.adddress);
        Counter = new web3.eth.Contract(contractInfo.ABI, contractInfo.adddress);

        // console.log("contract: ", Counter, Counter.methods);
        // console.log("contract methods: ", Counter.methods);
    }

}(window, window.cust = window.cust || {} ))

window.addEventListener('load', (event) => {
    cust.initProject();
});


