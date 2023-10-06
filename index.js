var score = 0;
        var clickingPower = 1;
        var currentCase = 0;

        var upgradeCost = 1000;

        var weaponDropCost = 15;
        var weaponDrops = 0;
        
        var glockCost = 100;
        var glock = 0;

        var novaCost = 500;
        var nova = 0;

        var p90Cost = 1500;
        var p90 = 0;

        var galilCost = 5000;
        var galil = 0;

        var ak47Cost = 10000;
        var ak47 = 0;

        var awpCost = 47500;
        var awp = 0;

        var g3sg1Cost = 200000;
        var g3sg1 = 0;


        function upgradeCase() {
            if (score >= upgradeCost) {
                score = score - upgradeCost;
                upgradeCost = Math.round(upgradeCost * 10);
                clickingPower = clickingPower * 15;
                currentCase = currentCase + 1;

                document.getElementById("score").innerHTML = score;
                document.getElementById("upgradeCost").innerHTML = upgradeCost;
                updateCaseImage();
                saveProgressToCookies();
            }
        }

        function updateCaseImage() {
            var imgElement = document.getElementById("caseImage");

            if (currentCase === 1) {
                imgElement.src = "/images/bravoCase.png";
            } else if (currentCase === 2) {
                imgElement.src = "/images/kato14.png";
            } else {
                imgElement = "/images/case.png"
            }
        }

        function buyWeaponDrop() {
            if (score >= weaponDropCost) {
                score = score - weaponDropCost;
                weaponDrops = weaponDrops + 1;
                weaponDropCost = Math.round(weaponDropCost * 1.10);

                document.getElementById("score").innerHTML = score;
                document.getElementById("weaponDropCost").innerHTML = weaponDropCost;
                document.getElementById("weaponDrops").innerHTML = weaponDrops;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        
        function buyGlock() {
            if (score >= glockCost) {
                score = score - glockCost;
                glock = glock + 1;
                glockCost = Math.round(glockCost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("glockCost").innerHTML = glockCost;
                document.getElementById("glock").innerHTML = glock;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        function buyNova() {
            if (score >= novaCost) {
                score = score - novaCost;
                nova = nova + 1;
                novaCost = Math.round(novaCost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("novaCost").innerHTML = novaCost;
                document.getElementById("nova").innerHTML = nova;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        function buyP90() {
            if (score >= p90Cost) {
                score = score - p90Cost;
                p90 = p90 + 1;
                p90Cost = Math.round(p90Cost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("p90Cost").innerHTML = p90Cost;
                document.getElementById("p90").innerHTML = p90;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        function buyGalil() {
            if (score >= galilCost) {
                score = score - galilCost;
                galil = galil + 1;
                galilCost = Math.round(galilCost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("galilCost").innerHTML = galilCost;
                document.getElementById("galil").innerHTML = galil;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        function buyAK47() {
            if (score >= ak47Cost) {
                score = score - ak47Cost;
                ak47 = ak47 + 1;
                ak47Cost = Math.round(ak47Cost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("ak47Cost").innerHTML = ak47Cost;
                document.getElementById("ak47").innerHTML = ak47;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        function buyAWP() {
            if (score >= awpCost) {
                score = score - awpCost;
                awp = awp + 1;
                awpCost = Math.round(awpCost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("awpCost").innerHTML = awpCost;
                document.getElementById("awp").innerHTML = awp;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }

        function buyG3SG1() {
            if (score >= g3sg1Cost) {
                score = score - g3sg1Cost;
                g3sg1 = g3sg1 + 1;
                g3sg1Cost = Math.round(g3sg1Cost * 1.10);
                
                document.getElementById("score").innerHTML = score;
                document.getElementById("g3sg1Cost").innerHTML = g3sg1Cost;
                document.getElementById("g3sg1").innerHTML = g3sg1;
                moneyPerSecond();
                saveProgressToCookies();
            }
        }
        
        function addToScore(amount) {
            score = score + amount;
            document.getElementById("score").innerHTML = score;
        }

        function moneyPerSecond() {
            moneyPerSec = weaponDrops + glock * 5 + nova * 15 + p90 * 40 + galil * 100 + ak47 * 250 + awp * 500 + g3sg1 * 1000;

            document.getElementById("moneyPerSec").innerHTML = moneyPerSec;
        }

        function unlockTitanHolo() {
            var titanImage = document.getElementById("titanImage")

            titanImage.style.display = "block";
            titanImage.src = "/images/titanHolo.png";
            saveProgressToCookies();
        }

        function saveProgressToCookies() {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 30); // Expires in 30 days
        
            document.cookie = `score=${score}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `clickingPower=${clickingPower}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `currentCase=${currentCase}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `upgradeCost=${upgradeCost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `weaponDropCost=${weaponDropCost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `weaponDrops=${weaponDrops}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `glockCost=${glockCost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `glock=${glock}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `novaCost=${novaCost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `nova=${nova}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `p90Cost=${p90Cost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `p90=${p90}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `galilCost=${galilCost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `galil=${galil}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `ak47Cost=${ak47Cost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `ak47=${ak47}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `awpCost=${awpCost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `awp=${awp}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `g3sg1Cost=${g3sg1Cost}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `g3sg1=${g3sg1}; expires=${expirationDate.toUTCString()}`;
        }

        function loadProgressFromCookies() {
            const cookies = document.cookie.split('; ');
            for (const cookie of cookies) {
                const [name, value] = cookie.split('=');
                
                if (!isNaN(value)) {
                    window[name] = parseInt(value, 10);
                }
            }
        }

        setInterval(function() {
            score = score + weaponDrops;
            score = score + glock * 5;
            score = score + nova * 15;
            score = score + p90 * 40;
            score = score + galil * 100;
            score = score + ak47 * 250;
            score = score + awp * 500;
            score = score + g3sg1 * 1000;
            document.getElementById("score").innerHTML = score;

            if (currentCase === 2 && score >= 1000000) {
                unlockTitanHolo();
            }

            document.title = "$" + score + " CSGO Clicker"
        }, 1000); //1s