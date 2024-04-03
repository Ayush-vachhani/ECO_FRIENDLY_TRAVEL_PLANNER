<style>
    * {
        font-family: "Poppins", sans-serif;
    }

    main {
        padding: 0;
    }

    .gradient-text {
        background-color: rgb(248, 15, 248);
        background-image: linear-gradient(45deg, #192aaf, #05ded3);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-size: 4em;
        font-family: "Poppins", sans-serif;
    }

    .main-section {
        padding: 1.4rem;
    }

    .main-section h1 {
        margin-bottom: 1.5rem;
    }

</style>

<main class="p-6">
    <section class="main-section">
        <h1 class="gradient-text text-center">Eco-Friendly Travel Finder</h1>
        <p class="text-center font-semibold p-3">Welcome to Eco-Friendly Travel Finder! Discover sustainable travel options that minimize your environmental impact while maximizing your adventure.</p>
    </section>

    <!-- Additional Sections -->
    <section class="mt-8 AboutSection">
        <h1 class="gradient-text text-center">Discover</h1>
        <div>
            Explore and learn about eco-friendly travel practices, destinations, and experiences to make your next trip unforgettable and environmentally responsible.
        </div>
    </section>

    <br><br>

    <section class="BenefitSection mt-8">
        <h2 class="gradient-text  mb-4 text-center">Benefits of Eco-Friendly Travel</h2>
        <div class="grid grid-cols-2">
            <div class="flex items-center justify-center p-4">
                <p class="text-center font-semibold p-3">Discover the advantages of eco-friendly travel, including reduced carbon footprint, support for local communities, and preservation of natural habitats.</p>
            </div>

            <div class="flex items-center justify-center grid-cols-2 gap-4 p-4">
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>Contribute to local economies</p>
                    </div>
                </div>
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>Minimize environmental impact</p>
                    </div>
                </div>
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>Support sustainable tourism</p>
                    </div>
                </div>
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>Preserve natural ecosystems</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-8 Explore-section">
        <section class="mt-8">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                <div class="rounded-lg p-6">
                    <h3 class="gradient-text mb-4 text-center">Discover Eco-Friendly Destinations</h3>
                    <p class="text-lg text-center">Explore our carefully curated selection of eco-friendly destinations that offer sustainable accommodations and unforgettable experiences.</p>
                </div>
            </div>
        </section>
        <section class="mt-8">
            <div class="carousel w-full">
                <div class="carousel-item relative w-full" id="slide1">
                    <img class="w-full" src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a class="btn btn-circle" href="#slide4">❮</a>
                        <a class="btn btn-circle" href="#slide2">❯</a>
                    </div>
                </div>
                <div class="carousel-item relative w-full" id="slide2">
                    <img class="w-full" src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a class="btn btn-circle" href="#slide1">❮</a>
                        <a class="btn btn-circle" href="#slide3">❯</a>
                    </div>
                </div>
                <div class="carousel-item relative w-full" id="slide3">
                    <img class="w-full" src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a class="btn btn-circle" href="#slide2">❮</a>
                        <a class="btn btn-circle" href="#slide4">❯</a>
                    </div>
                </div>
                <div class="carousel-item relative w-full" id="slide4">
                    <img class="w-full" src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"/>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a class="btn btn-circle" href="#slide3">❮</a>
                        <a class="btn btn-circle" href="#slide1">❯</a>
                    </div>
                </div>
            </div>
        </section>
    </section>
</main>
