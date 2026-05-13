<?php snippet('header') ?>

<!-- ══ GALLERY VIEW ══ -->
<div id="view-gallery">

  <!-- PROJEKT-DETAIL -->
  <div id="pd">
    <div id="pd-img-wrap">
      <img id="pd-img" src="" alt="">
      <button class="pd-arr pd-arr-l" onclick="prevPd()" aria-label="Vorheriges Projekt">‹</button>
      <button class="pd-arr pd-arr-r" onclick="nextPd()" aria-label="Nächstes Projekt">›</button>
    </div>
    <div id="pd-info">
      <div class="pd-cell" id="pd-main"></div>
      <div class="pd-cell pd-cell-last">
        <div id="pd-num"></div>
        <button class="pd-x" onclick="closePd()" aria-label="Schließen">✕</button>
      </div>
    </div>
  </div>

  <?php
    $projects = $page->children()->listed()->sortBy('num', 'asc');
    $total    = $projects->count();

    // Build column groups and flat indexed list
    $cols        = [1 => [], 2 => [], 3 => []];
    $projectList = [];
    $idx         = 0;

    foreach ($projects as $project) {
        $col = (int)$project->column()->value();
        if ($col < 1 || $col > 3) $col = ($idx % 3) + 1;
        $cols[$col][] = ['p' => $project, 'idx' => $idx];
        $projectList[] = $project;
        $idx++;
    }
  ?>

  <div class="gallery">
    <?php foreach ([1, 2, 3] as $c): ?>
    <div class="gcol">
      <?php foreach ($cols[$c] as $item):
        $p     = $item['p'];
        $i     = $item['idx'];
        $ratio = $p->ratio()->or('ratio-4-3')->value();

        // Use uploaded file first, fallback to /images/ placeholder
        $thumb    = $p->files()->first();
        $thumbUrl = $thumb ? $thumb->url() : url('images/' . $p->thumbimage()->value());
        $numStr   = ($i + 1) . ' / ' . $total;
      ?>
      <div class="gc" onclick="openPd(<?= $i ?>)">
        <div class="gc-inner">
          <div class="gc-img <?= esc($ratio) ?>">
            <img src="<?= esc($thumbUrl, 'attr') ?>"
                 alt="<?= esc($p->title(), 'attr') ?>"
                 loading="<?= $i === 0 ? 'eager' : 'lazy' ?>">
          </div>
          <div class="gc-meta">
            <div class="gc-title"><?= $p->title()->escape() ?></div>
            <div class="gc-num"><?= $numStr ?></div>
          </div>
        </div>
      </div>
      <?php endforeach ?>
    </div>
    <?php endforeach ?>
  </div>

</div><!-- /view-gallery -->

<!-- ══ ABOUT ══ -->
<?php $about = page('about') ?>
<div id="view-about" class="page">
  <div class="page-2col">
    <div class="pcol">
      <?php
        $photo = $about ? $about->files()->first() : null;
        $photoUrl = $photo ? $photo->url() : url('images/mara-monetti.jpg');
      ?>
      <div class="p-photo">
        <img src="<?= esc($photoUrl, 'attr') ?>" alt="Mara Monetti">
      </div>
      <h2>About</h2>
      <?= $about ? $about->abouttext()->kirbytext() : '' ?>
    </div>
    <div class="pcol">
      <h2>CV</h2>
      <?= $about ? $about->cvtext()->kirbytext() : '' ?>
      <?php if ($about && $about->clients()->isNotEmpty()): ?>
      <br>
      <h2>Clients &amp; Partners</h2>
      <div class="clients"><?= $about->clients()->escape() ?></div>
      <?php endif ?>
    </div>
  </div>
</div>

<!-- ══ IMPRESSUM ══ -->
<?php $impressum = page('impressum') ?>
<div id="view-impressum" class="page">
  <div class="p-full">
    <?= $impressum ? $impressum->text()->kirbytext() : '' ?>
  </div>
</div>

<!-- ══ DATENSCHUTZ ══ -->
<?php $datenschutz = page('datenschutz') ?>
<div id="view-datenschutz" class="page">
  <div class="p-full">
    <?= $datenschutz ? $datenschutz->text()->kirbytext() : '' ?>
  </div>
</div>

<!-- Projektdaten für JavaScript -->
<script>
window.projects = [
<?php foreach ($projectList as $i => $p):
  $large    = $p->files()->filterBy('filename', '*-gross*')->first();
  $largeUrl = $large ? $large->url() : url('images/' . $p->largeimage()->value());
  $num      = ($i + 1) . ' / ' . $total;
  $comma    = $i < count($projectList) - 1 ? ',' : '';
?>
  {
    title:  <?= json_encode($p->title()->value()) ?>,
    desc:   <?= json_encode($p->description()->value()) ?>,
    client: <?= json_encode($p->client()->value()) ?>,
    url:    <?= json_encode($p->clienturl()->value()) ?>,
    num:    <?= json_encode($num) ?>,
    img:    <?= json_encode($largeUrl) ?>
  }<?= $comma ?>

<?php endforeach ?>
];
</script>

<?php snippet('footer') ?>
