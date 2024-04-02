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

    .transportDetails {
        padding: 1.4rem;
        margin-top: 45px;
        border-radius: 25px;
        box-shadow: 0px 10px 20px rgba(6, 222, 204, 0.923);
        transition: box-shadow 0.3s ease;
    }
</style>

<main class="p-6">
    <section class="main-section">
        <h1 class="gradient-text text-center">Eco-Friendly Travel Finder</h1>
        <p class="text-center font-semibold p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima ad voluptas illum? Illo itaque omnis hic dolores dolorem, iure eius dolor assumenda deleniti,
            enim sint, pariatur repudiandae eos sapiente accusamus. Similique non sint quasi vel aut, voluptatem
            iure ipsam aspernatur, inventore sit fuga facilis ducimus ullam quibusdam atque, cupiditate aliquid
            blanditiis nisi praesentium dolore dignissimos sed debitis amet explicabo. Totam!</p>
    </section>

    <!-- Additional Sections -->
    <section class="mt-8 AboutSection">
        <h1 class="gradient-text text-center">Discover</h1>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perspiciatis assumenda omnis, eos tenetur
            laudantium culpa amet natus! Animi ratione error quisquam laborum labore enim in voluptatem nam sit libero!
        </div>
    </section>

    <br><br>

    <section class="BenefitSection mt-8">
        <h2 class="text-2xl font-semibold  mb-4 text-center">Benefits of Eco-Friendly Travel</h2>
        <div class="grid grid-cols-2">
            <div class="flex items-center justify-center p-4">
                <p class="text-center font-semibold p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima ad voluptas illum? Illo itaque omnis hic dolores dolorem, iure eius dolor assumenda deleniti,
                    enim sint, pariatur repudiandae eos sapiente accusamus. Similique non sint quasi vel aut, voluptatem
                    iure ipsam aspernatur, inventore sit fuga facilis ducimus ullam quibusdam atque, cupiditate aliquid
                    blanditiis nisi praesentium dolore dignissimos sed debitis amet explicabo. Totam!</p>
            </div>

            <div class="flex items-center justify-center grid-cols-2 gap-4 p-4">
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
                <div class="group p-4 rounded border transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-8 Explore-section">
        <section class="mt-8">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                <div class="rounded-lg p-6">
                    <h3 class="text-3xl font-semibold mb-4 text-center">Discover Eco-Friendly Destinations</h3>
                    <p class="text-lg text-center">Explore our carefully curated selection of eco-friendly destinations
                        that offer sustainable accommodations and unforgettable experiences.</p>
                </div>
            </div>
        </section>
        <section class="mt-8">
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    </section>
</main>
