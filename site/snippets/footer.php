  </div><!-- /main-wrap -->

  <footer class="footer">
    <div class="fcol">
      <div class="fc1">
        <div class="fc1-label">Contact</div>
        <span class="fc1-br"></span>
        <div class="fc1-addr">
          Mara Monetti<br>
          Fotografie<br>
          <br>
          Martin-May-Strasse 10<br>
          60594 Frankfurt am Main<br>
          Germany<br>
          <br>
          <a href="mailto:info@maramonetti.de">info@maramonetti.de</a>
        </div>
        <div class="fc1-copy">© Mara Monetti <?= date('Y') ?></div>
      </div>
    </div>

    <div class="fcol">
      <span class="fbox" onclick="showView('about')">About</span>
      <a href="https://www.instagram.com" target="_blank" rel="noopener" class="fbox">Instagram</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener" class="fbox">LinkedIn</a>
      <span class="fbox" onclick="showView('impressum')">Impressum</span>
      <span class="fbox" onclick="showView('datenschutz')">Datenschutz</span>
    </div>

    <div class="fcol">
      <div class="fc3">
        <div class="fc3-title">Newsletter</div>
        <div class="fc3-desc"><?= site()->newsletterdesc()->or('Bleiben Sie auf dem Laufenden mit neuen Projekten und Ausstellungen.') ?></div>
        <div class="nl-wrap">
          <input type="email" placeholder="E-Mail-Adresse" aria-label="E-Mail-Adresse">
          <button type="button" onclick="newsletter()">OK</button>
        </div>
      </div>
    </div>
  </footer>

</div><!-- /site -->

<script src="<?= url('js/main.js') ?>"></script>
</body>
</html>
