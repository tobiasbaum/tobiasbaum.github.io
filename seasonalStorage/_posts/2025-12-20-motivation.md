# DIY-Saisonalspeicher

Die sogenannte Energiewende ist aus mehreren Gründen erstrebenswert: Weniger CO2-Emissionen, weniger Abhängigkeit von endlichen Ressourcen und weniger Unterstützung für Diktaturen (die vielleicht gerade wegen ihrer Ressourcen stärker diktatorisch ausgerichtet sind TODO). Für viele damit zusammenhängende Probleme gibt es technisch ausgereifte Lösungen: PV-Anlagen, Windparks, Wärmepumpen, Dämmung, E-Autos, ... Aber um in Richtung 100% erneuerbare Energie zu kommen, ist in Deutschland die Speicherung von Energie aus dem Sommer für den Winter fast unumgänglich: Die Leistung von PV-Anlagen im Winter ist zu schwach, der Heizenergiebedarf höher und weil alle Nachbarländer das gleiche Problem haben, wäre ein Stromimport auch kaum möglich.

Ein paar Zahlen aus meinem eigenen Haushalt illustrieren das Problem:
- Wir haben eine Solaranlage mit 9,6 kWp auf dem Dach und einen zugehörigen Akku von ca. 10 kWh. Damit betreiben wir elektrische Geräte und eine Wärmepumpenheizung.
- Im Sommer und selbst in der Übergangszeit kommen wir damit fast immer sehr gut über Tag und Nacht und haben hohe Überschüsse.
- Im Winter hingegen ist der Akku sehr häufig leer.
- Alles in allem haben wir in einem Beispieljahr
-- 6120 kWh ins Netz eingespeist
-- x kWh aus dem Netz bezogen
- Übers Jahr gerechnet könnten wir uns also komplett selbst versorgen - wenn das Problem der Saisonalspeicherung nicht wäre.

Das Problem der Saisonalspeicherung ist dabei nicht, dass es überhaupt keine Ansätze gäbe. Mit HPS Picea TODO gab es sogar ein kommerziell verfügbares, wasserstoffbasiertes System und auch andere Technologien sind am Markt zu haben. Das Problem ist, dass all diese Ansätze zu teuer sind. Picea hat einen deutlich fünfstelligen Betrag gekostet, und es gibt zu wenige Haushalte die alle einfacheren Maßnahmen (Dämmung, Wärmepumpe, PV-Anlage, ...) schon umgesetzt haben, dann noch genug Geld dafür haben und dann auch noch genug Motivation/Altruismus/Schmerztoleranz um es wirklich umzusetzen.

Eine Lösung, die für mich funktioniert, würde auch für viele andere Haushalte in Deutschland funktionieren. Sie würde das Problem vielleicht nicht komplett lösen und wäre ggf. auch weniger effizient als eine stärker zentralisierte Lösung, ist als "grass-roots"-Ansatz aber auch schneller umsetzbar und demokratischer.

Ein auf den ersten Blick spannender Ansatz sind "Redox-Flow-Batterien". Es gibt hierzu das extrem gut dokumentierte Open-Hardware-Projekt fbrc TODO. Ich finde super, was dessen Beteiligte auf die Beine gestellt haben. Eine Überschlagsrechnung offenbart allerdings ein Problem: Eine bezahlbare, DIY-geeignete Redox-Flow-Batterie hat eine Energiedichte von grob 20 Wh/l, für die Speicherung von x kWh wird also ein Volumen von x l benötigt. Das sind x m³ - zu viel für meine Garage oder meinen Garten.

Der Consultant Michael Liebreich sieht u.a. Wasserstoff und Druckluft als Technologie-Anwärter für praktikable Saisonalspeicherung: https://liebreich.com/the-clean-hydrogen-ladder-now-updated-to-v4-1/ Wasserstoff übersteht den "passt es in den Garten"-Test am besten (Details später) und wirkt mir insgesamt am aussichtsreichsten. Darum dieses Hobby-Projekt: Ein günstiger DIY-Saisonalspeicher auf Basis von Wasserstoff/Elektrolyse!
