    // Clases de Negocio
        class Animal {
            constructor(nombre, peso, edad, tipo) {
                this.nombre = nombre;
                this.peso = peso;
                this.edad = edad;
                this.tipo = tipo; // Para manejo de iconos internos
            }
        }

        class Perro extends Animal {
            constructor(nombre, peso, edad, raza) {
                super(nombre, peso, edad, 'perro');
                this.raza = raza;
                this.icon = '🐶';
            }
            getExtra() { return { label: 'Raza', value: this.raza }; }
        }

        class Gato extends Animal {
            constructor(nombre, peso, edad, sexo) {
                super(nombre, peso, edad, 'gato');
                this.sexo = sexo;
                this.icon = '🐱';
            }
            getExtra() { return { label: 'Sexo', value: this.sexo }; }
        }

        class Conejo extends Animal {
            constructor(nombre, peso, edad, color) {
                super(nombre, peso, edad, 'conejo');
                this.color = color;
                this.icon = '🐰';
            }
            getExtra() { return { label: 'Color', value: this.color }; }
        }

        // Datos Iniciales
        const pacientes = [
            new Perro('Simba', 11, 4, 'Shih Tzu'),
            new Gato('Ringo', 5, 2, 'Macho'),
            new Conejo('Dumbo', 3, 1, 'Blanco'),
            new Perro('Luna', 22, 6, 'Labrador'),
            new Gato('Mina', 3, 5, 'Hembra'),
            new Conejo('Tambor', 2, 2, 'Gris')
        ];

        // Lógica de Renderizado
        function mostrarAnimales() {
            const container = document.getElementById('listaAnimales');
            container.innerHTML = ''; // Limpiar

            pacientes.forEach((animal, index) => {
                const extra = animal.getExtra();
                const card = document.createElement('div');
                card.className = 'animal-card animate-in';
                card.style.animationDelay = `${index * 0.1}s`; // Efecto cascada

                card.innerHTML = `
                    <div class="card-header">
                        <div class="icon-circle">${animal.icon}</div>
                        <span class="badge">Paciente Activo</span>
                    </div>
                    <div class="animal-name">${animal.nombre}</div>
                    <div class="divider"></div>
                    <div class="animal-info">
                        <div class="info-item">
                            <span class="info-label">Edad</span>
                            <span class="info-value">${animal.edad} años</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Peso</span>
                            <span class="info-value">${animal.peso} Kg</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">${extra.label}</span>
                            <span class="info-value">${extra.value}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Estado</span>
                            <span class="info-value">Saludable</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <span>📋</span> Ver historial médico
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Eventos
        document.getElementById('btnMostrar').addEventListener('click', mostrarAnimales);
    