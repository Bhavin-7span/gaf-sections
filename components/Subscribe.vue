<template comments>
  <section class="section-subscribe">
    <div class="container">
      <div class="subscribe lg:grid lg:grid-cols-2 lg:gap-28 lg:items-center">
        <div class="subscribe__content">
          <h2 class="text-p1-700 font-medium text-b1 lg:text-d3">
            Subscribe today
          </h2>
          <p class="text-p1-700 mt-5 font-light text-b4 lg:text-b3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry dummy text ever since.
          </p>
        </div>
        <div class="subscribe__form mt-10 lg:mt-0">
          <form class="lg:w-10/24 2xl:w-10/24 2xl:ml-4/24">
            <ul class="grid gap-4 md:grid-cols-2">
              <li>
                <div class="field field--required">
                  <label class="block" for="">First Name</label>
                  <input
                    type="text"
                    placeholder="Insert your first name here"
                  />
                </div>
              </li>
              <li>
                <div class="field field--required">
                  <label class="block" for="">Last Name</label>
                  <input type="text" placeholder="Insert your last name here" />
                </div>
              </li>
              <li>
                <div class="field">
                  <label class="block" for="">Email Address</label>
                  <input type="email" placeholder="Insert your email address" />
                </div>
              </li>
              <li>
                <div class="field field--required">
                  <label class="block" for="">I am a</label>
                  <div class="field">
                    <select placeholder="Subject">
                      <option value="">Select Inquiry Type</option>
                      <option>Type A</option>
                      <option>Type B</option>
                      <option>Type C</option>
                    </select>
                  </div>
                </div>
              </li>
            </ul>
            <Btn
              class="mt-12 w-full sm:w-auto"
              label="Call to action"
              color="s1"
              theme="solid"
              size="md"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
