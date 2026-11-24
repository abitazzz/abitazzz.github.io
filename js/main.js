function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn-selector').forEach(btn => {
        btn.classList.remove('bg-white', 'text-brand-blue', 'shadow-sm');
        btn.classList.add('text-slate-600');
    });

    const targetPane = document.getElementById('tab-' + tabId);
    if (targetPane) targetPane.classList.add('active');

    const activeBtn = document.getElementById('btn-tab-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('bg-white', 'text-brand-blue', 'shadow-sm');
        activeBtn.classList.remove('text-slate-600');
    }

    const seccion = document.getElementById('seccion-interactiva');
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function updateSavingCalculator() {
    const type = document.getElementById('property-type').value;
    const amountEl = document.getElementById('saving-amount');
    const detailEl = document.getElementById('saving-detail');

    const data = {
        depa: {
            amount: 'S/ 24.50 / mes',
            detail: 'Optimizando cargadores, router y luces en ambientes.'
        },
        familiar: {
            amount: 'S/ 42.00 / mes',
            detail: 'Eliminando consumo standby en TV, Laptop y Luces.'
        },
        oficina: {
            amount: 'S/ 118.00 / mes',
            detail: 'Apagado programado de monitores, impresoras y aire.'
        }
    };

    if (data[type]) {
        amountEl.textContent = data[type].amount;
        detailEl.textContent = data[type].detail;
    }
}

function toggleAccordion(button) {
    const item = button.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('open');
    });

    if (!isOpen) {
        item.classList.add('open');
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

window.addEventListener('click', (e) => {
    if (e.target.id && e.target.id.startsWith('modal-')) {
        e.target.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    switchTab('quienes');
});
