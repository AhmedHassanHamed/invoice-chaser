(() => {
  const T = {
    ar: {
      exportCsv: "تصدير CSV",
      reqBtn: "طلب دفع",
      reqTitle: "طلب دفع",
      reqNo: "المرجع",
      reqTo: "العميل",
      reqAmount: "المبلغ المستحق",
      payLbl: "بيانات الدفع",
      reqScan: "امسح الرمز لقراءة بيانات الدفع",
      reqNote: "هذا طلب دفع وليس فاتورة ضريبية.",
      pdf: "تصدير PDF",
      tPdf: "اختر «حفظ كـ PDF» من نافذة الطباعة",
      report: "ملخص شهري",
      demoOn: "بيانات تجريبية",
      demoOff: "إزالة التجريبية",
      tDemoOn: "تم تحميل بيانات تجريبية",
      tDemoOff: "تمت إزالة البيانات التجريبية",
      todayTitle: "مطلوب متابعته اليوم",
      todaySub:
        "تذكيرات حان موعدها: قبل الاستحقاق بـ 3 أيام، ثم يوم الاستحقاق، ثم كل 3 أيام بعد التأخر (أسبوعيًا بعد أسبوعين).",
      setTitle: "إعدادات الرسائل",
      lblBiz: "اسم نشاطك (يظهر في توقيع الرسالة)",
      lblPay: "بيانات الدفع (رابط أو رقم إنستا باي)",
      repTitle: "ملخص الفواتير - {date}",
      repMonth: "المحصّل هذا الشهر",
      repOut: "إجمالي المستحق",
      repOver: "المتأخر",
      repTop: "أكبر المتأخرات:",
      tReport: "تم نسخ الملخص",
      backup: "نسخة احتياطية",
      restore: "استعادة",
      langLbl: "English",
      sOut: "المبلغ المستحق",
      sOver: "متأخر",
      sPaid: "تم تحصيله",
      sRate: "نسبة التحصيل",
      lgPaid: "محصّل",
      lgActive: "قيد الانتظار",
      lgOver: "متأخر",
      formTitle: "فاتورة جديدة",
      lblName: "اسم العميل",
      lblPhone: "واتساب العميل",
      lblEmail: "البريد الإلكتروني (اختياري)",
      lblAmount: "المبلغ",
      lblDue: "تاريخ الاستحقاق",
      addBtn: "إضافة الفاتورة",
      tableTitle: "سجل الفواتير",
      clearAll: "مسح كل البيانات",
      searchPh: "ابحث باسم العميل",
      sortDue: "الأقرب استحقاقًا",
      sortAmt: "الأعلى مبلغًا",
      sortNew: "الأحدث إضافة",
      fAll: "الكل",
      fActive: "قيد الانتظار",
      fOverdue: "متأخرة",
      fPaid: "محصّلة",
      thClient: "العميل",
      thAmount: "المبلغ",
      thDue: "الاستحقاق",
      thStatus: "الحالة",
      thAct: "إجراء",
      bActive: "قيد الانتظار",
      bOverdue: "متأخرة",
      bPaid: "تم التحصيل",
      late: "متأخرة {n} يوم",
      left: "باقي {n} يوم",
      today: "يستحق اليوم",
      rem: "تذكيرات: {n}",
      wa: "واتساب",
      mail: "بريد",
      done: "تم الدفع",
      del: "حذف",
      e1: "لا توجد فواتير بعد",
      e2: "أضف أول فاتورة من النموذج لتبدأ المتابعة.",
      e1f: "لا توجد نتائج",
      e2f: "غيّر البحث أو التصفية.",
      errContact: "أدخل رقم واتساب أو بريدًا إلكترونيًا واحدًا على الأقل.",
      errPhone: "رقم الواتساب غير صالح.",
      tAdded: "تمت إضافة الفاتورة",
      tPaid: "تم تسجيل الدفع",
      tDel: "تم حذف الفاتورة",
      undo: "تراجع",
      tRestored: "تمت استعادة {n} فاتورة",
      tBad: "الملف غير صالح",
      confirmClear: "سيتم مسح كل الفواتير نهائيًا. متابعة؟",
      subjF: "تذكير بفاتورة مستحقة - {client}",
      subjH: "فاتورة متأخرة - {client}",
      bodyF:
        "مرحبًا {client}،\nتذكير ودي بفاتورة بقيمة {amount} مستحقة بتاريخ {date}.\nلو تم التحويل بالفعل تجاهل الرسالة، وشكرًا لتعاونكم.",
      bodyH:
        "مرحبًا {client}،\nفاتورتكم بقيمة {amount} متأخرة {days} يوم عن موعد استحقاقها ({date}).\nنرجو إتمام السداد خلال يومين، أو إبلاغنا بموعد التحويل المتوقع.",
    },
    en: {
      exportCsv: "Export CSV",
      reqBtn: "Payment request",
      reqTitle: "Payment request",
      reqNo: "Reference",
      reqTo: "Client",
      reqAmount: "Amount due",
      payLbl: "Payment details",
      reqScan: "Scan the code for payment details",
      reqNote: "This is a payment request, not a tax invoice.",
      pdf: "Export PDF",
      tPdf: 'Choose "Save as PDF" in the print window',
      report: "Monthly summary",
      demoOn: "Demo data",
      demoOff: "Remove demo",
      tDemoOn: "Demo data loaded",
      tDemoOff: "Demo data removed",
      todayTitle: "To follow up today",
      todaySub:
        "Reminders that are due: 3 days before the due date, on the due date, then every 3 days once late (weekly after two weeks).",
      setTitle: "Message settings",
      lblBiz: "Business name (added as signature)",
      lblPay: "Payment details (link or InstaPay number)",
      repTitle: "Invoice summary - {date}",
      repMonth: "Collected this month",
      repOut: "Total outstanding",
      repOver: "Overdue",
      repTop: "Largest overdue:",
      tReport: "Summary copied",
      backup: "Backup",
      restore: "Restore",
      langLbl: "العربية",
      sOut: "Outstanding",
      sOver: "Overdue",
      sPaid: "Collected",
      sRate: "Collection rate",
      lgPaid: "Collected",
      lgActive: "Pending",
      lgOver: "Overdue",
      formTitle: "New invoice",
      lblName: "Client name",
      lblPhone: "Client WhatsApp",
      lblEmail: "Email (optional)",
      lblAmount: "Amount",
      lblDue: "Due date",
      addBtn: "Add invoice",
      tableTitle: "Invoices",
      clearAll: "Clear all data",
      searchPh: "Search by client",
      sortDue: "Due soonest",
      sortAmt: "Highest amount",
      sortNew: "Newest",
      fAll: "All",
      fActive: "Pending",
      fOverdue: "Overdue",
      fPaid: "Paid",
      thClient: "Client",
      thAmount: "Amount",
      thDue: "Due",
      thStatus: "Status",
      thAct: "Action",
      bActive: "Pending",
      bOverdue: "Overdue",
      bPaid: "Paid",
      late: "{n} days late",
      left: "{n} days left",
      today: "Due today",
      rem: "Reminders: {n}",
      wa: "WhatsApp",
      mail: "Email",
      done: "Mark paid",
      del: "Delete",
      e1: "No invoices yet",
      e2: "Add your first invoice using the form to start tracking.",
      e1f: "No results",
      e2f: "Change the search or filter.",
      errContact: "Enter a WhatsApp number or an email address.",
      errPhone: "The WhatsApp number is not valid.",
      tAdded: "Invoice added",
      tPaid: "Payment recorded",
      tDel: "Invoice deleted",
      undo: "Undo",
      tRestored: "{n} invoices restored",
      tBad: "Invalid file",
      confirmClear: "All invoices will be permanently deleted. Continue?",
      subjF: "Reminder: outstanding invoice - {client}",
      subjH: "Overdue invoice - {client}",
      bodyF:
        "Hello {client},\nA friendly reminder about the invoice of {amount} due on {date}.\nIf you have already paid, please ignore this message. Thank you.",
      bodyH:
        "Hello {client},\nYour invoice of {amount} is {days} days past its due date ({date}).\nPlease pay within two days, or tell us when the transfer will be made.",
    },
  };

  const K = "invoice_chaser_data";
  const $ = (id) => document.getElementById(id);
  const load = (k, d) => {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? d;
    } catch {
      return d;
    }
  };
  const save = (k, v) => {
    try {
      localStorage.setItem(k, typeof v === "string" ? v : JSON.stringify(v));
    } catch {}
  };

  let invoices = load(K, []);
  let cfg = load("invoice_cfg", { biz: "", pay: "" });
  if (!Array.isArray(invoices)) invoices = [];
  let lang = localStorage.getItem("invoice_lang") === "en" ? "en" : "ar";
  let cur = localStorage.getItem("invoice_cur") || "EGP";
  let filter = "All",
    lastDeleted = null,
    toastTimer,
    shown = [];

  const t = (k, v = {}) =>
    Object.entries(v).reduce(
      (s, [a, b]) => s.split(`{${a}}`).join(b),
      T[lang][k] ?? k,
    );
  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const money = (n) =>
    new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-US", {
      style: "currency",
      currency: cur,
      maximumFractionDigits: 0,
    }).format(n);
  const day0 = (d) => new Date(d).setHours(0, 0, 0, 0);
  const fmtDate = (d) =>
    new Date(d).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  const diffDays = (inv) =>
    Math.round((day0(new Date()) - day0(inv.dueDate)) / 86400000);
  const status = (inv) =>
    inv.status === "Paid" ? "Paid" : diffDays(inv) > 0 ? "Overdue" : "Active";
  const ic = (n) =>
    `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;

  function normPhone(raw) {
    let p = String(raw).replace(/[^\d+]/g, "");
    if (p.startsWith("+")) p = p.slice(1);
    else if (p.startsWith("00")) p = p.slice(2);
    else if (/^01\d{9}$/.test(p)) p = "20" + p.slice(1);
    return /^\d{9,15}$/.test(p) ? p : "";
  }

  function toast(msg, undo) {
    $("toastMsg").textContent = msg;
    $("toastUndo").hidden = !undo;
    $("toastUndo").textContent = t("undo");
    $("toast").hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      $("toast").hidden = true;
    }, 6000);
  }

  function persist() {
    save(K, invoices);
    render();
  }

  function message(inv) {
    const late = diffDays(inv),
      firm = late > 7;
    const vars = {
      client: inv.clientName,
      amount: money(inv.amount),
      date: fmtDate(inv.dueDate),
      days: late,
    };
    let body = t(firm ? "bodyH" : "bodyF", vars);
    if (cfg.pay) body += "\n\n" + cfg.pay;
    if (cfg.biz) body += "\n- " + cfg.biz;
    return { subject: t(firm ? "subjH" : "subjF", vars), body };
  }

  function applyStatic() {
    const h = $("htmlTag");
    h.lang = lang;
    h.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((e) => {
      e.textContent = t(e.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((e) => {
      e.placeholder = t(e.dataset.i18nPh);
    });
    $("currency").value = cur;
    $("bizName").value = cfg.biz;
    $("payInfo").value = cfg.pay;
  }

  function render() {
    const rows = invoices.map((i) => ({ ...i, st: status(i) }));
    const sum = (f) => rows.filter(f).reduce((s, i) => s + i.amount, 0);
    const paid = sum((i) => i.st === "Paid"),
      act = sum((i) => i.st === "Active"),
      over = sum((i) => i.st === "Overdue");
    const total = paid + act + over;
    $("vOut").textContent = money(act + over);
    $("vOver").textContent = money(over);
    $("vPaid").textContent = money(paid);
    $("vRate").textContent =
      (total ? Math.round((paid / total) * 100) : 0) + "%";
    [
      ["segPaid", paid],
      ["segActive", act],
      ["segOver", over],
    ].forEach(([id, v]) => {
      $(id).style.width = total ? (v / total) * 100 + "%" : "0";
    });
    $("seg").setAttribute(
      "aria-label",
      `${t("lgPaid")} ${money(paid)}, ${t("lgActive")} ${money(act)}, ${t("lgOver")} ${money(over)}`,
    );

    $("btnDemo").lastElementChild.textContent = t(
      invoices.some((i) => i.demo) ? "demoOff" : "demoOn",
    );
    renderToday(rows);
    $("tabs").innerHTML = ["All", "Active", "Overdue", "Paid"]
      .map((f) => {
        const n =
          f === "All" ? rows.length : rows.filter((i) => i.st === f).length;
        return `<button class="tab" role="tab" data-f="${f}" aria-selected="${f === filter}">${t("f" + f)}<b>${n}</b></button>`;
      })
      .join("");

    const q = $("q").value.trim().toLowerCase(),
      sort = $("sort").value;
    const list = rows
      .filter(
        (i) =>
          (filter === "All" || i.st === filter) &&
          i.clientName.toLowerCase().includes(q),
      )
      .sort((a, b) =>
        sort === "amt"
          ? b.amount - a.amount
          : sort === "new"
            ? b.created - a.created
            : new Date(a.dueDate) - new Date(b.dueDate),
      );

    shown = list;
    $("empty").style.display = list.length ? "none" : "block";
    $("e1").textContent = t(rows.length ? "e1f" : "e1");
    $("e2").textContent = t(rows.length ? "e2f" : "e2");

    $("rows").innerHTML = list
      .map((i) => {
        const d = diffDays(i),
          m = message(i);
        const when =
          i.st === "Paid"
            ? ""
            : d > 0
              ? t("late", { n: d })
              : d === 0
                ? t("today")
                : t("left", { n: -d });
        const { wa, ml } = links(i, m);
        const actions =
          i.st === "Paid"
            ? ""
            : `${wa}${ml}<button class="act" data-print="${i.id}">${ic("doc")}${t("reqBtn")}</button><button class="act" data-paid="${i.id}">${ic("check")}${t("done")}</button>`;
        return `<tr><td><strong>${esc(i.clientName)}</strong>${i.reminders ? `<small>${t("rem", { n: i.reminders })}</small>` : ""}</td>
      <td class="amt" data-l="${t("thAmount")}">${money(i.amount)}</td><td data-l="${t("thDue")}"><span>${fmtDate(i.dueDate)}<small>${when}</small></span></td>
      <td data-l="${t("thStatus")}"><span class="badge b-${i.st}">${t("b" + i.st)}</span></td>
      <td><div class="acts">${actions}<button class="act del" data-del="${i.id}" aria-label="${t("del")}">${ic("trash")}</button></div></td></tr>`;
      })
      .join("");
  }

  function links(i, m) {
    const wa = i.phone
      ? `<a class="act wa" data-remind="${i.id}" target="_blank" rel="noopener" href="https://wa.me/${i.demo ? "" : i.phone}?text=${encodeURIComponent(m.body)}">${ic("chat")}${t("wa")}</a>`
      : "";
    const ml = i.clientEmail
      ? `<a class="act" data-remind="${i.id}" href="mailto:${esc(i.clientEmail)}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(m.body)}">${ic("mail")}${t("mail")}</a>`
      : "";
    return { wa, ml };
  }

  function isDue(i) {
    if (i.st === "Paid") return false;
    const d = diffDays(i),
      since = i.lastRemind
        ? Math.round((day0(new Date()) - i.lastRemind) / 864e5)
        : Infinity;
    return d >= -3 && since >= (d > 14 ? 7 : 3);
  }

  function renderToday(rows) {
    const todo = rows.filter(isDue).sort((a, b) => diffDays(b) - diffDays(a));
    $("todayBox").hidden = !todo.length;
    $("todayList").innerHTML = todo
      .map((i) => {
        const d = diffDays(i),
          { wa, ml } = links(i, message(i));
        const when =
          d > 0
            ? t("late", { n: d })
            : d === 0
              ? t("today")
              : t("left", { n: -d });
        return `<li><div><strong>${esc(i.clientName)}</strong><small>${money(i.amount)} - ${when}</small></div><div class="acts">${wa}${ml}</div></li>`;
      })
      .join("");
  }

  function report() {
    const now = new Date(),
      rows = invoices.map((i) => ({ ...i, st: status(i) }));
    const sum = (a) => a.reduce((s, i) => s + i.amount, 0);
    const month = rows.filter(
      (i) =>
        i.st === "Paid" &&
        i.paidAt &&
        new Date(i.paidAt).getMonth() === now.getMonth() &&
        new Date(i.paidAt).getFullYear() === now.getFullYear(),
    );
    const over = rows
      .filter((i) => i.st === "Overdue")
      .sort((a, b) => b.amount - a.amount);
    const lines = [
      t("repTitle", { date: fmtDate(now) }),
      t("repMonth") + ": " + money(sum(month)),
      t("repOut") + ": " + money(sum(rows.filter((i) => i.st !== "Paid"))),
      t("repOver") + ": " + money(sum(over)) + " (" + over.length + ")",
    ];
    if (over.length)
      lines.push(
        t("repTop"),
        ...over
          .slice(0, 5)
          .map(
            (i) =>
              `- ${i.clientName}: ${money(i.amount)} (${t("late", { n: diffDays(i) })})`,
          ),
      );
    const text = lines.join("\n");
    (navigator.clipboard
      ? navigator.clipboard.writeText(text)
      : Promise.reject()
    ).then(
      () => toast(t("tReport")),
      () =>
        download("summary.txt", "text/plain;charset=utf-8", "\uFEFF" + text),
    );
  }

  function setDefaultDue() {
    const d = new Date(Date.now() + 7 * 864e5);
    $("dueDate").value = new Date(d - d.getTimezoneOffset() * 6e4)
      .toISOString()
      .slice(0, 10);
  }

  $("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const err = $("formErr"),
      phoneRaw = $("clientPhone").value.trim(),
      email = $("clientEmail").value.trim();
    const phone = phoneRaw ? normPhone(phoneRaw) : "";
    err.hidden = true;
    if (!phoneRaw && !email) {
      err.textContent = t("errContact");
      err.hidden = false;
      return;
    }
    if (phoneRaw && !phone) {
      err.textContent = t("errPhone");
      err.hidden = false;
      return;
    }
    const amount = parseFloat($("amount").value);
    if (!$("clientName").value.trim() || !(amount > 0) || !$("dueDate").value)
      return;
    invoices.push({
      id: "inv_" + Date.now() + Math.random().toString(36).slice(2, 6),
      clientName: $("clientName").value.trim(),
      clientEmail: email,
      phone,
      amount,
      dueDate: $("dueDate").value,
      status: "Active",
      reminders: 0,
      created: Date.now(),
    });
    persist();
    e.target.reset();
    setDefaultDue();
    toast(t("tAdded"));
  });

  const onAct = (e) => {
    const b = e.target.closest(
      "[data-paid],[data-del],[data-remind],[data-print]",
    );
    if (!b) return;
    if (b.dataset.remind) {
      const i = invoices.find((x) => x.id === b.dataset.remind);
      if (i) {
        i.reminders = (i.reminders || 0) + 1;
        i.lastRemind = day0(new Date());
        setTimeout(persist, 0);
      }
    } else if (b.dataset.print) {
      printRequest(b.dataset.print);
    } else if (b.dataset.paid) {
      const i = invoices.find((x) => x.id === b.dataset.paid);
      if (i) {
        i.status = "Paid";
        i.paidAt = Date.now();
        persist();
        toast(t("tPaid"));
      }
    } else {
      const i = invoices.find((x) => x.id === b.dataset.del);
      lastDeleted = i;
      invoices = invoices.filter((x) => x.id !== b.dataset.del);
      persist();
      toast(t("tDel"), true);
    }
  };
  $("rows").addEventListener("click", onAct);
  $("todayList").addEventListener("click", onAct);
  $("toastUndo").addEventListener("click", () => {
    if (lastDeleted) {
      invoices.push(lastDeleted);
      lastDeleted = null;
      persist();
    }
    $("toast").hidden = true;
  });
  $("tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]");
    if (b) {
      filter = b.dataset.f;
      render();
    }
  });
  $("q").addEventListener("input", render);
  $("sort").addEventListener("change", render);
  $("currency").addEventListener("change", (e) => {
    cur = e.target.value;
    save("invoice_cur", cur);
    render();
  });
  $("btnLang").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    save("invoice_lang", lang);
    applyStatic();
    render();
  });
  $("btnClear").addEventListener("click", () => {
    if (invoices.length && confirm(t("confirmClear"))) {
      invoices = [];
      persist();
    }
  });

  function download(name, type, content) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([content], { type }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  const q = (v) => {
    v = String(v ?? "");
    if (/^[=+\-@]/.test(v)) v = "'" + v;
    return '"' + v.replace(/"/g, '""') + '"';
  };
  $("btnCsv").addEventListener("click", () => {
    const head = [
      "Client",
      "Phone",
      "Email",
      "Amount",
      "Currency",
      "Due date",
      "Status",
      "Reminders",
    ];
    const body = invoices.map((i) =>
      [
        i.clientName,
        i.phone,
        i.clientEmail,
        i.amount,
        cur,
        i.dueDate,
        status(i),
        i.reminders || 0,
      ]
        .map(q)
        .join(","),
    );
    download(
      "invoices-" + new Date().toISOString().slice(0, 10) + ".csv",
      "text/csv;charset=utf-8",
      "\uFEFF" + [head.map(q).join(","), ...body].join("\r\n"),
    );
  });
  $("btnBackup").addEventListener("click", () =>
    download(
      "invoice-chaser-backup.json",
      "application/json",
      JSON.stringify(invoices, null, 2),
    ),
  );
  $("btnRestore").addEventListener("click", () => $("fileRestore").click());
  $("fileRestore").addEventListener("change", async (e) => {
    const f = e.target.files[0];
    e.target.value = "";
    if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      if (!Array.isArray(data)) throw 0;
      const ids = new Set(invoices.map((i) => i.id));
      const ok = data
        .filter(
          (i) =>
            i &&
            typeof i.clientName === "string" &&
            Number(i.amount) > 0 &&
            i.dueDate &&
            !ids.has(i.id),
        )
        .map((i) => ({
          id: String(i.id || "inv_" + Math.random().toString(36).slice(2)),
          clientName: i.clientName.slice(0, 80),
          clientEmail: String(i.clientEmail || ""),
          phone: normPhone(i.phone || i.clientPhone || ""),
          amount: Number(i.amount),
          dueDate: String(i.dueDate),
          status: i.status === "Paid" ? "Paid" : "Active",
          reminders: Number(i.reminders) || 0,
          lastRemind: Number(i.lastRemind) || 0,
          paidAt: Number(i.paidAt) || 0,
          created: Number(i.created) || Date.now(),
        }));
      invoices.push(...ok);
      persist();
      toast(t("tRestored", { n: ok.length }));
    } catch {
      toast(t("tBad"));
    }
  });

  function demo() {
    if (invoices.some((i) => i.demo)) {
      invoices = invoices.filter((i) => !i.demo);
      persist();
      toast(t("tDemoOff"));
      return;
    }
    const names =
      lang === "ar"
        ? [
            "شركة النور للتجارة",
            "مكتب الأفق للتصميم",
            "د. منى حسن",
            "متجر سما",
            "ورشة الأمل",
            "أحمد سمير",
            "مؤسسة بيان",
            "عيادة الشفاء",
          ]
        : [
            "Nour Trading",
            "Horizon Design Studio",
            "Dr. Mona Hassan",
            "Sama Store",
            "Amal Workshop",
            "Ahmed Samir",
            "Bayan Co.",
            "Shifa Clinic",
          ];
    const plan = [
      [-20, 12000, 0],
      [-9, 4500, 0],
      [-2, 2800, 0],
      [0, 7500, 0],
      [2, 3200, 0],
      [12, 9000, 0],
      [-30, 6000, 1],
      [-12, 1500, 1],
    ];
    const now = Date.now(),
      iso = (ms) =>
        new Date(ms - new Date(ms).getTimezoneOffset() * 6e4)
          .toISOString()
          .slice(0, 10);
    plan.forEach(([off, amount, paid], n) =>
      invoices.push({
        id: "demo_" + n + "_" + now,
        demo: true,
        clientName: names[n],
        clientEmail: n % 3 === 0 ? "client@example.com" : "",
        phone: "201000000000",
        amount,
        dueDate: iso(now + off * 864e5),
        status: paid ? "Paid" : "Active",
        reminders: n === 1 ? 1 : 0,
        lastRemind: 0,
        paidAt: paid ? now - n * 36e5 : 0,
        created: now - n,
      }),
    );
    persist();
    toast(t("tDemoOn"));
  }
  $("btnDemo").addEventListener("click", demo);
  function startPrint(name) {
    const old = document.title;
    document.title = name;
    window.addEventListener(
      "afterprint",
      () => {
        document.title = old;
      },
      { once: true },
    );
    toast(t("tPdf"));
    window.print();
  }

  function printRequest(id) {
    const i = invoices.find((x) => x.id === id);
    if (!i) return;
    const ref = "INV-" + (i.id.replace(/\D/g, "").slice(-6) || "000000");
    const qr =
      window.makeQR(
        cfg.pay ||
          `${ref} | ${i.clientName} | ${money(i.amount)} | ${i.dueDate}`,
      ) || window.makeQR(ref);
    const row = (l, v) => `<div><dt>${t(l)}</dt><dd>${v}</dd></div>`;
    $("printArea").innerHTML = `<h1>Invoice<span>Chaser</span></h1>
    <p class="p-sub">${t("reqTitle")}${cfg.biz ? " - " + esc(cfg.biz) : ""}</p>
    <div class="p-req"><dl>${row("reqNo", ref)}${row("reqTo", esc(i.clientName))}${row("reqAmount", money(i.amount))}${row("thDue", fmtDate(i.dueDate))}${cfg.pay ? row("payLbl", esc(cfg.pay).replace(/\n/g, "<br>")) : ""}</dl>
    <div class="p-qr">${qr}<small>${t("reqScan")}</small></div></div><p class="p-note">${t("reqNote")}</p>`;
    startPrint("payment-request-" + ref);
  }

  function pdf() {
    if (!shown.length) {
      toast(t("e1f"));
      return;
    }
    const sum = (f) => shown.filter(f).reduce((s, i) => s + i.amount, 0);
    const out = sum((i) => i.st !== "Paid"),
      over = sum((i) => i.st === "Overdue"),
      paid = sum((i) => i.st === "Paid");
    const rate = out + paid ? Math.round((paid / (out + paid)) * 100) : 0;
    const box = (l, v) => `<div><small>${t(l)}</small><b>${v}</b></div>`;
    $("printArea").innerHTML = `<h1>Invoice<span>Chaser</span></h1>
    <p class="p-sub">${t("repTitle", { date: fmtDate(new Date()) })}${cfg.biz ? " - " + esc(cfg.biz) : ""}</p>
    <div class="p-sum">${box("sOut", money(out))}${box("sOver", money(over))}${box("sPaid", money(paid))}${box("sRate", rate + "%")}</div>
    <table><thead><tr><th>${t("thClient")}</th><th>${t("thAmount")}</th><th>${t("thDue")}</th><th>${t("thStatus")}</th></tr></thead>
    <tbody>${shown.map((i) => `<tr><td>${esc(i.clientName)}</td><td>${money(i.amount)}</td><td>${fmtDate(i.dueDate)}</td><td>${t("b" + i.st)}</td></tr>`).join("")}</tbody></table>`;
    const old = document.title;
    document.title = "invoices-" + new Date().toISOString().slice(0, 10);
    window.addEventListener(
      "afterprint",
      () => {
        document.title = old;
      },
      { once: true },
    );
    toast(t("tPdf"));
    window.print();
  }
  $("btnPdf").addEventListener("click", pdf);
  $("btnReport").addEventListener("click", report);
  const saveCfg = () => {
    cfg = { biz: $("bizName").value.trim(), pay: $("payInfo").value.trim() };
    save("invoice_cfg", cfg);
    render();
  };
  $("bizName").addEventListener("input", saveCfg);
  $("payInfo").addEventListener("input", saveCfg);
  if ("serviceWorker" in navigator && location.protocol.startsWith("http"))
    navigator.serviceWorker.register("sw.js").catch(() => {});

  applyStatic();
  setDefaultDue();
  render();
})();
