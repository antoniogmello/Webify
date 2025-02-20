<section id="contact" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row gy-10 gx-lg-8 gx-xl-12">
            <!-- Formulário -->
            <div class="col-lg-8">
              <h2 class="display-4 mb-3">Contacta-nos!</h2>
              <form
                class="contact-form needs-validation"
                @submit.prevent="handleSubmit"
              >
                <div class="messages"></div>
                <div class="row gx-4">
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Jane"
                        required
                      />
                      <label for="form_name">Nome *</label>
                      <div class="invalid-feedback">
                        Por favor, insira o seu nome.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        class="form-control"
                        placeholder="Doe"
                        required
                      />
                      <label for="form_lastname">Sobrenome *</label>
                      <div class="invalid-feedback">
                        Por favor, insira o seu sobrenome.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="exemplo@email.com"
                        required
                      />
                      <label for="form_email">Email *</label>
                      <div class="invalid-feedback">
                        Por favor, insira um email válido.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        class="form-control"
                        placeholder="Telefone"
                        required
                      />
                      <label for="form_phone">Telefone *</label>
                      <div class="invalid-feedback">
                        Por favor, insira o seu telefone.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-4">
                      <textarea
                        id="form_message"
                        name="message"
                        class="form-control"
                        placeholder="A sua mensagem"
                        style="height: 150px"
                        required
                      ></textarea>
                      <label for="form_message">Mensagem *</label>
                      <div class="invalid-feedback">
                        Por favor, insira a sua mensagem.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <input
                      type="submit"
                      class="btn btn-primary rounded-pill btn-send mb-3"
                      value="Enviar mensagem"
                    />
                    <p class="text-muted">
                      <strong>*</strong> Campos obrigatórios.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <!-- Informações de Contato -->
            <div class="col-lg-4">
              <div class="d-flex flex-column gap-4">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon text-primary fs-28 me-4">
                    <i class="uil uil-phone-volume"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Telefone</h5>
                    <p class="mb-0">+351 914 875 742</p>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center">
                  <div class="icon text-primary fs-28 me-4">
                    <i class="uil uil-envelope"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Email</h5>
                    <a
                      href="mailto:contacto@webify-dev.pt"
                      class="link-body"
                    >
                      contacto@webify-dev.pt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
