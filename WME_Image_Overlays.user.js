// ==UserScript==
// @name        WME Image Overlays
// @author      Tom 'Glodenox' Puttemans
// @namespace   http://www.tomputtemans.com/
// @description Makes it possible to add images as overlay on the Waze Map Editor
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @icon        data:image/png;base64,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
// @version     2.0.0
// @grant       none
// ==/UserScript==

/* global W, $, OpenLayers, I18n */

var styleElement;

async function onWmeReady() {
  enrichOpenLayers();

  var io_strings = {
    en: {
      tab_title: 'Image Overlays',
      warning_title: 'Warning! Make sure you know which data sources you may use!',
      warning_explanation1: 'As this script allows you to add external sources to add information to the map, it is important to know that not all sources can be used freely by Waze.',
      warning_explanation2: 'Copying information from data sources like OpenStreetMap and Bing Maps is <strong>strictly forbidden</strong>. It may even get you banned from editing the map as it could require Waze to remove certain sections from the map.',
      safe_sources_header: 'These are usually safe sources to use:',
      safe_sources_list: '<li>Information sent to you directly through mail by an organiser</li><li>Information on a governmental website</li><li>Maps found in newspapers or news sites</li><li>Data released as "open data" with no restrictions on commercial usage</li>',
      community_advice: 'When in doubt about a resource, contact <a href="https://wazeopedia.waze.com/">your local community</a> and ask for their advice.',
      warning_button: "I'll keep this in mind",
      warning_info: 'Note: this is a one-time only warning',
      add_image: 'Add image overlay',
      empty_list: 'No images added yet',
      name_missing: 'No name specified',
      hide_overlay: 'Hide overlay',
      opacity: 'Opacity:',
      parent_map_layer: 'Parent map layer',
      parent_map_layer_help: 'This decides on top of which map layer the image overlay will be drawn',
      layer_hidden: 'Hidden',
      image_name: 'Overlay Image Name',
      stretch_image: 'Stretch:',
      control_sensitivity: 'Sensitivity:',
      persistent_warning: 'Data is currently not stored persistently, your browser may remove image overlays over time without warning.',
      persistent_warning_link: 'Read more...',
      export_image: 'Export image',
      import_image: 'Import image',
      import_image_description: 'You can now paste an image from your clipboard in the WME with Ctrl+V or select an image with the file input field below.',
      import_error: 'Could not import image, the image is probably too big to retrieve. If you used the clipboard, you may want to download the image and try the file input field above instead.',
      align_image: 'Align with map',
      align_image_description: "You can use the controls below to align the image overlay with the map. Use the 'Attach to map' button to finish.",
      attach_image: 'Attach to map',
      cancel: 'Cancel',
      show_overlay: 'Show overlay',
      add_group: 'Add group',
      group_name: 'Group Name',
      edit_group: 'Edit group',
      group_members: 'Members',
      no_members: 'No images in this group yet',
      export_group: 'Export group',
      import_group: 'Import group',
      save_group: 'Save group'
    }
  };
  setTranslations(io_strings);
  applyStyles();

  var tab = await addTab();
  var imagesList = document.createElement('div'),
      overlayControls = document.createElement('div');

  if (localStorage.ImageOverlays_warning == undefined && W.loginManager.getUserRank() < 3) {
    imagesList.classList.add('hidden');
    overlayControls.classList.add('hidden');
    var warningMessage = document.createElement('div');
    warningMessage.className = 'image-overlays-source-warning';
    var exclamationMark = document.createElement('i');
    exclamationMark.className = 'fa fa-fw fa-3x fa-exclamation-triangle pull-left';
    warningMessage.appendChild(exclamationMark);
    var warningTitle = document.createElement('h3');
    warningTitle.textContent = I18n.t('image_overlays.warning_title');
    warningMessage.appendChild(warningTitle);
    var warningExplanation1 = document.createElement('p');
    warningExplanation1.textContent = I18n.t('image_overlays.warning_explanation1');
    warningMessage.appendChild(warningExplanation1);
    var warningExplanation2 = document.createElement('p');
    warningExplanation2.innerHTML = I18n.t('image_overlays.warning_explanation2');
    warningMessage.appendChild(warningExplanation2);
    var safeSourcesHeader = document.createElement('p');
    safeSourcesHeader.style.marginBottom = '0';
    safeSourcesHeader.textContent = I18n.t('image_overlays.safe_sources_header');
    warningMessage.appendChild(safeSourcesHeader);
    var safeSourcesList = document.createElement('ul');
    safeSourcesList.innerHTML = I18n.t('image_overlays.safe_sources_list');
    warningMessage.appendChild(safeSourcesList);
    var communityAdvice = document.createElement('p');
    communityAdvice.innerHTML = I18n.t('image_overlays.community_advice');
    warningMessage.appendChild(communityAdvice);
    var warningButton = document.createElement('button');
    warningButton.className = 'btn btn-success center-block';
    warningButton.disabled = true;
    warningButton.addEventListener('click', function() {
      warningMessage.classList.add('hidden');
      imagesList.classList.remove('hidden');
      overlayControls.classList.remove('hidden');
      localStorage.ImageOverlays_warning = 'accepted';
    });
    var checkSign = document.createElement('i');
    checkSign.className = 'fa fa-fw fa-check';
    warningButton.appendChild(checkSign);
    warningButton.appendChild(document.createTextNode(I18n.t('image_overlays.warning_button')));
    var countdownSeparator = document.createTextNode(' - ');
    warningButton.appendChild(countdownSeparator);
    var warningCountdown = document.createElement('span');
    warningCountdown.textContent = '20';
    warningButton.appendChild(warningCountdown);
    warningMessage.appendChild(warningButton);
    var warningInfo = document.createElement('footer');
    warningInfo.textContent = I18n.t('image_overlays.warning_info');
    warningMessage.appendChild(warningInfo);
    tab.appendChild(warningMessage);
    var tabActivityListener = new MutationObserver(function() {
      if (tab.parentNode.classList.contains('active')) {
        var intervalId = setInterval(function() {
          if (warningCountdown.textContent > 1) {
            warningCountdown.textContent = warningCountdown.textContent - 1;
          } else {
            clearInterval(intervalId);
            warningButton.disabled = false;
            warningButton.removeChild(countdownSeparator);
            warningButton.removeChild(warningCountdown);
          }
        }, 1000);
        tabActivityListener.disconnect();
      }
    });
    tabActivityListener.observe(tab.parentNode, { attributes: true, attributeFilter: [ 'class' ] });
  }

  var activeLayers = new Map(), // overlayKey -> OLLayer (all currently visible overlays)
      editLayer = null,         // temporary layer shown during import/alignment
      currentBlob = null,
      currentKey = null;

  var editPanel = document.createElement('div');
  editPanel.className = 'hidden';

  var importError = document.createElement('p');
  importError.className = 'hidden text-danger';
  importError.textContent = I18n.t('image_overlays.import_error');
  var pasteListener = function(e) {
    var items = e.clipboardData.items;
    for (var i = 0; i < items.length; ++i) {
      if (items[i].kind == 'file' && items[i].type.indexOf('image/') !== -1) {
        var blob = items[i].getAsFile();
        if (blob) {
          importError.classList.add('hidden');
          displayAlignPage({
            blob: blob
          });
        } else {
          importError.classList.remove('hidden');
        }
        break;
      }
    }
  };

  var persistentStorageWarning = document.createElement('div');
  persistentStorageWarning.className = 'alert alert-danger text-center hidden';
  persistentStorageWarning.style.marginBottom = '1em';
  persistentStorageWarning.innerHTML = '<i class="fa fa-exclamation-triangle"></i> ' + I18n.t('image_overlays.persistent_warning') + ' <a href="https://www.waze.com/forum/viewtopic.php?f=819&t=225760&p=1850215#p1850215" target="_blank">' + I18n.t('image_overlays.persistent_warning_link') + '</a>';
  tab.appendChild(persistentStorageWarning);

  var cancelButton,
      cancelButtonIcon = document.createElement('i'),
      panelTitle = document.createElement('h3'),
      panelTitleIcon = document.createElement('i'),
      panelTitleText = document.createElement('span'),
      description = document.createElement('p'),
      instructions = document.createElement('div'),
      addImageOverlayButton = document.createElement('button'),
      addSpan = document.createElement('span'),
      importButton = document.createElement('button'),
      layerControls = document.createElement('div'),
      opacityRange = document.createElement('input'),
      opacityLabel = document.createElement('label'),
      imageNameInput = document.createElement('wz-text-input'),
      exportButton = document.createElement('button');
  panelTitle.appendChild(panelTitleIcon);
  panelTitle.appendChild(document.createTextNode(' '));
  panelTitle.appendChild(panelTitleText);
  panelTitle.className = 'image-overlays-panel-title';
  editPanel.appendChild(panelTitle);
  description.className = 'text-center';
  editPanel.appendChild(description);
  instructions.className = 'text-center';
  editPanel.appendChild(instructions);
  tab.appendChild(editPanel);

  var emptyList = document.createElement('span');
  emptyList.style.fontStyle = 'italic';
  emptyList.appendChild(document.createTextNode(I18n.t('image_overlays.empty_list')));
  tab.appendChild(emptyList);
  imagesList.classList.add('result-list');
  imagesList.style.marginBottom = '1em';
  tab.appendChild(imagesList);
  getIndexedDB(function(db) {
    db.transaction(['overlays'], 'readonly')
      .objectStore('overlays')
      .openCursor()
      .addEventListener('success', function(e) {
      var cursor = e.target.result;
      if (cursor) {
        addImageOverlay(cursor.value.name, cursor.key);
        cursor.continue();
      }
    });
    db.transaction(['groups'], 'readonly')
      .objectStore('groups')
      .openCursor()
      .addEventListener('success', function(e) {
      var cursor = e.target.result;
      if (cursor) {
        addGroupEntry(cursor.value.name, cursor.key, cursor.value.overlayKeys || []);
        cursor.continue();
      }
    });
  });

  addImageOverlayButton.className = 'btn btn-primary';
  addSpan.className = 'fa fa-plus';
  addSpan.style.marginRight = '5px';
  addImageOverlayButton.appendChild(addSpan);
  addImageOverlayButton.appendChild(document.createTextNode(I18n.t('image_overlays.add_image')));
  addImageOverlayButton.addEventListener('click', displayImportPage);
  overlayControls.appendChild(addImageOverlayButton);
  var addGroupButton = document.createElement('button');
  addGroupButton.className = 'btn btn-default';
  addGroupButton.style.marginLeft = '5px';
  addGroupButton.innerHTML = '<i class="fa fa-object-group"></i> ' + I18n.t('image_overlays.add_group');
  addGroupButton.addEventListener('click', function() { displayGroupEditPanel(null); });
  overlayControls.appendChild(addGroupButton);
  importButton.className = 'btn btn-default';
  importButton.style.float = 'right';
  importButton.innerHTML = '<i class="fa fa-download"></i> ' + I18n.t('image_overlays.import_image');
  importButton.addEventListener('click', importLayer);
  overlayControls.appendChild(importButton);
  var importGroupButton = document.createElement('button');
  importGroupButton.className = 'btn btn-default';
  importGroupButton.style.cssFloat = 'right';
  importGroupButton.style.marginRight = '5px';
  importGroupButton.innerHTML = '<i class="fa fa-download"></i> ' + I18n.t('image_overlays.import_group');
  importGroupButton.addEventListener('click', importGroup);
  overlayControls.appendChild(importGroupButton);
  tab.appendChild(overlayControls);

  layerControls.className = 'hidden clearfix controls';
  opacityRange.type = 'range';
  opacityRange.min = 0;
  opacityRange.max = 50;
  opacityRange.value = 50;
  opacityRange.id = 'imageOverlaysOpacity';
  opacityLabel.textContent = I18n.t('image_overlays.opacity');
  opacityLabel.htmlFor = opacityRange.id;
  layerControls.appendChild(opacityLabel);
  layerControls.appendChild(opacityRange);
  var rangeListener = function() {
    if (editLayer) {
      editLayer.setOpacity(opacityRange.value / 50);
    } else if (currentKey && activeLayers.has(currentKey)) {
      getIndexedDB(function(db) {
        var objectStore = db.transaction(['overlays'], 'readwrite').objectStore('overlays');
        objectStore.get(currentKey).addEventListener('success', function(e) {
          var overlay = e.target.result;
          overlay.opacity = opacityRange.value / 50;
          objectStore.put(overlay, currentKey).addEventListener('success', function() {
            activeLayers.get(currentKey).setOpacity(opacityRange.value / 50);
          });
        });
      });
    }
  };
  opacityRange.addEventListener('input', rangeListener);
  opacityRange.addEventListener('change', rangeListener);
  var parentLayer = document.createElement('select');
  parentLayer.className = 'form-control';
  parentLayer.id = 'imageOverlaysParentLayer';
  W.map.events.on({
    addlayer: updateParentLayer,
    removelayer: updateParentLayer,
    changelayer: updateParentLayer
  });
  parentLayer.addEventListener('change', function() {
    if (editLayer) {
      positionLayer(editLayer, parentLayer.value);
    } else if (currentKey && activeLayers.has(currentKey)) {
      getIndexedDB(function(db) {
        var objectStore = db.transaction(['overlays'], 'readwrite').objectStore('overlays');
        objectStore.get(currentKey).addEventListener('success', function(e) {
          var overlay = e.target.result;
          overlay.layerTarget = parentLayer.value;
          objectStore.put(overlay, currentKey).addEventListener('success', function() {
            positionLayer(activeLayers.get(currentKey), parentLayer.value);
          });
        });
      });
    }
  });
  var parentLayerLabel = document.createElement('label');
  parentLayerLabel.textContent = I18n.t('image_overlays.parent_map_layer') + ' ';
  parentLayerLabel.htmlFor = parentLayer.id;
  parentLayerLabel.style.marginTop = '10px';
  var parentLayerHelp = document.createElement('i');
  parentLayerHelp.className = 'waze-tooltip';
  parentLayerHelp.title = I18n.t('image_overlays.parent_map_layer_help');
  $(parentLayerHelp).tooltip();
  parentLayerLabel.appendChild(parentLayerHelp);
  layerControls.appendChild(parentLayerLabel);
  layerControls.appendChild(parentLayer);
  exportButton.className = 'btn btn-default';
  exportButton.style.margin = '10px 0';
  exportButton.innerHTML = '<i class="fa fa-upload"></i> ' + I18n.t('image_overlays.export_image');
  exportButton.addEventListener('click', function() { exportOverlay(currentKey); });
  layerControls.appendChild(exportButton);
  tab.appendChild(layerControls);
  imageNameInput.className = 'imageoverlays-margins';
  imageNameInput.placeholder = I18n.t('image_overlays.image_name');

  var editButtonsContainer = document.createElement('div');
  editButtonsContainer.className = 'hidden imageoverlays-margins';
  editButtonsContainer.style.height = '30px';
  cancelButton = document.createElement('button');
  cancelButton.className = 'btn btn-default cancel';
  cancelButtonIcon.className = 'fa fa-trash-o fa-fw';
  cancelButton.appendChild(cancelButtonIcon);
  cancelButton.appendChild(document.createTextNode(I18n.t('image_overlays.cancel')));
  cancelButton.addEventListener('click', function() {
    editPanel.classList.add('hidden');
    editButtonsContainer.classList.add('hidden');
    exportButton.classList.remove('hidden');
    overlayControls.classList.remove('hidden');
    imagesList.classList.remove('hidden');
    emptyList.classList.toggle('hidden', imagesList.childNodes.length > 0);
    currentKey = null;
    layerControls.classList.add('hidden');
    removeEditLayer();
  });
  editButtonsContainer.appendChild(cancelButton);
  var pinToMapButton = document.createElement('button');
  pinToMapButton.className = 'btn btn-primary';
  pinToMapButton.innerHTML = '<i class="fa fa-map-pin fa-fw"></i> ' + I18n.t('image_overlays.attach_image');
  pinToMapButton.addEventListener('click', pinToMap);
  editButtonsContainer.appendChild(pinToMapButton);
  tab.appendChild(editButtonsContainer);

  var versionBlock = document.createElement('p');
  var versionInfo = document.createElement('a');
  versionInfo.appendChild(document.createTextNode(GM_info.script.name + ' (v' + GM_info.script.version + ')'));
  versionInfo.href = 'https://www.waze.com/forum/viewtopic.php?f=819&t=225760';
  versionInfo.target = '_blank';
  versionBlock.appendChild(versionInfo);
  tab.appendChild(versionBlock);

  function addImageOverlay(name, key) {
    emptyList.classList.add('hidden');
    var overlayHandle = document.createElement('wz-card');
    overlayHandle.className = 'list-item-card';
    overlayHandle.dataset.key = key;
    var container = document.createElement('div');
    container.className = 'image-overlay-handle';
    var toggleButton = document.createElement('button');
    toggleButton.className = 'fa fa-fw fa-eye-slash toggle-visibility';
    toggleButton.title = I18n.t('image_overlays.show_overlay');
    toggleButton.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleOverlay(key, overlayHandle);
    });
    container.appendChild(toggleButton);
    var nameContainer = document.createElement('div');
    if (name && name.length > 0) {
      nameContainer.textContent = name;
    } else {
      nameContainer.style.fontStyle = 'italic';
      nameContainer.textContent = I18n.t('image_overlays.name_missing');
    }
    nameContainer.addEventListener('click', function() {
      if (activeLayers.has(key)) {
        focusOverlay(key, overlayHandle);
      } else {
        toggleOverlay(key, overlayHandle);
      }
    });
    container.appendChild(nameContainer);
    var editOverlay = document.createElement('button');
    editOverlay.className = 'fa fa-pencil rename';
    editOverlay.addEventListener('click', function(e) {
      e.stopPropagation();
      getIndexedDB(function(db) {
        var objectStore = db.transaction(['overlays'], 'readwrite').objectStore('overlays');
        objectStore.get(key).addEventListener('success', function(e) {
          var overlay = e.target.result;
          overlay.key = key;
          editPanel.classList.remove('hidden');
          overlayControls.classList.add('hidden');
          editButtonsContainer.classList.remove('hidden');
          imagesList.classList.add('hidden');
          emptyList.classList.add('hidden');
          displayAlignPage(overlay, key);
        });
      });
    });
    container.appendChild(editOverlay);
    var remove = document.createElement('button');
    remove.className = 'fa fa-trash-o remove';
    remove.addEventListener('click', function(e) {
      e.stopPropagation();
      getIndexedDB(function(db) {
        db.transaction(['overlays'], 'readwrite').objectStore('overlays').delete(key).addEventListener('success', function() {
          if (activeLayers.has(key)) {
            W.map.removeLayer(activeLayers.get(key));
            activeLayers.delete(key);
          }
          if (currentKey === key) {
            currentKey = null;
            layerControls.classList.add('hidden');
          }
          overlayHandle.parentNode.removeChild(overlayHandle);
          emptyList.classList.toggle('hidden', imagesList.childNodes.length > 0);
        });
      });
    });
    container.appendChild(remove);
    overlayHandle.appendChild(container);
    imagesList.appendChild(overlayHandle);
  }

  function toggleOverlay(key, overlayHandle) {
    if (activeLayers.has(key)) {
      W.map.removeLayer(activeLayers.get(key));
      activeLayers.delete(key);
      setOverlayHandleActive(overlayHandle, false);
      if (currentKey === key) {
        currentKey = null;
        layerControls.classList.add('hidden');
        for (var i = 0; i < imagesList.childNodes.length; i++) {
          imagesList.childNodes[i].style.fontWeight = '';
        }
      }
    } else {
      getIndexedDB(function(db) {
        db.transaction(['overlays'], 'readonly').objectStore('overlays').get(key).addEventListener('success', function(e) {
          var overlay = e.target.result;
          overlay.key = key;
          displayImageOverlay(overlay, false, function(newLayer) {
            activeLayers.set(key, newLayer);
            setOverlayHandleActive(overlayHandle, true);
            focusOverlay(key, overlayHandle);
          });
        });
      });
    }
  }

  function focusOverlay(key, overlayHandle) {
    if (!activeLayers.has(key)) return;
    currentKey = key;
    for (var i = 0; i < imagesList.childNodes.length; i++) {
      imagesList.childNodes[i].style.fontWeight = (imagesList.childNodes[i].dataset.key == key ? '700' : '');
    }
    getIndexedDB(function(db) {
      db.transaction(['overlays'], 'readonly').objectStore('overlays').get(key).addEventListener('success', function(e) {
        var overlay = e.target.result;
        opacityRange.value = (overlay.opacity ? overlay.opacity * 50 : 50);
        updateParentLayer(overlay.layerTarget);
        layerControls.classList.remove('hidden');
      });
    });
  }

  function setOverlayHandleActive(overlayHandle, active) {
    if (!overlayHandle) return;
    var btn = overlayHandle.querySelector('.toggle-visibility');
    if (btn) {
      btn.className = 'fa fa-fw ' + (active ? 'fa-eye' : 'fa-eye-slash') + ' toggle-visibility';
      btn.title = I18n.t('image_overlays.' + (active ? 'hide_overlay' : 'show_overlay'));
    }
  }

  function addGroupEntry(name, groupKey, memberKeys) {
    emptyList.classList.add('hidden');
    var groupHandle = document.createElement('wz-card');
    groupHandle.className = 'list-item-card group-card';
    groupHandle.dataset.groupKey = groupKey;
    var container = document.createElement('div');
    container.className = 'image-overlay-handle';
    var toggleButton = document.createElement('button');
    toggleButton.className = 'fa fa-fw fa-eye-slash toggle-visibility';
    toggleButton.title = I18n.t('image_overlays.show_overlay');
    toggleButton.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleGroup(groupKey, memberKeys, groupHandle);
    });
    container.appendChild(toggleButton);
    var nameContainer = document.createElement('div');
    var nameText = document.createElement('span');
    if (name && name.length > 0) {
      nameText.textContent = name;
    } else {
      nameText.style.fontStyle = 'italic';
      nameText.textContent = I18n.t('image_overlays.name_missing');
    }
    nameContainer.appendChild(nameText);
    var countBadge = document.createElement('span');
    countBadge.className = 'group-count-badge';
    countBadge.textContent = ' (' + memberKeys.length + ')';
    nameContainer.appendChild(countBadge);
    container.appendChild(nameContainer);
    var exportGroupBtn = document.createElement('button');
    exportGroupBtn.className = 'fa fa-fw fa-upload';
    exportGroupBtn.title = I18n.t('image_overlays.export_group');
    exportGroupBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      exportGroup(groupKey);
    });
    container.appendChild(exportGroupBtn);
    var editGroupBtn = document.createElement('button');
    editGroupBtn.className = 'fa fa-fw fa-pencil rename';
    editGroupBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      editPanel.classList.remove('hidden');
      overlayControls.classList.add('hidden');
      editButtonsContainer.classList.add('hidden');
      imagesList.classList.add('hidden');
      emptyList.classList.add('hidden');
      displayGroupEditPanel(groupKey);
    });
    container.appendChild(editGroupBtn);
    var deleteGroupBtn = document.createElement('button');
    deleteGroupBtn.className = 'fa fa-fw fa-trash-o remove';
    deleteGroupBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      getIndexedDB(function(db) {
        db.transaction(['groups'], 'readwrite').objectStore('groups').delete(groupKey).addEventListener('success', function() {
          groupHandle.parentNode.removeChild(groupHandle);
          emptyList.classList.toggle('hidden', imagesList.childNodes.length > 0);
        });
      });
    });
    container.appendChild(deleteGroupBtn);
    groupHandle.appendChild(container);
    imagesList.appendChild(groupHandle);
  }

  function toggleGroup(groupKey, memberKeys, groupHandle) {
    var allActive = memberKeys.length > 0 && memberKeys.every(function(k) { return activeLayers.has(k); });
    if (allActive) {
      memberKeys.forEach(function(k) {
        if (activeLayers.has(k)) {
          W.map.removeLayer(activeLayers.get(k));
          activeLayers.delete(k);
          updateOverlayHandleVisibility(k, false);
        }
      });
      setOverlayHandleActive(groupHandle, false);
      if (memberKeys.indexOf(currentKey) !== -1) {
        currentKey = null;
        layerControls.classList.add('hidden');
        for (var i = 0; i < imagesList.childNodes.length; i++) {
          imagesList.childNodes[i].style.fontWeight = '';
        }
      }
    } else {
      memberKeys.forEach(function(k) {
        if (!activeLayers.has(k)) {
          getIndexedDB(function(db) {
            db.transaction(['overlays'], 'readonly').objectStore('overlays').get(k).addEventListener('success', function(e) {
              if (!e.target.result) return;
              var overlay = e.target.result;
              overlay.key = k;
              displayImageOverlay(overlay, false, function(newLayer) {
                activeLayers.set(k, newLayer);
                updateOverlayHandleVisibility(k, true);
                if (memberKeys.every(function(mk) { return activeLayers.has(mk); })) {
                  setOverlayHandleActive(groupHandle, true);
                }
              });
            });
          });
        }
      });
    }
  }

  function updateOverlayHandleVisibility(key, visible) {
    for (var i = 0; i < imagesList.childNodes.length; i++) {
      var handle = imagesList.childNodes[i];
      if (handle.dataset.key == key) {
        setOverlayHandleActive(handle, visible);
        break;
      }
    }
  }

  function updateParentLayer(currentLayer) {
    if (!currentLayer || typeof currentLayer == 'object') {
      currentLayer = parentLayer.value;
    }
    while (parentLayer.firstChild) {
      parentLayer.removeChild(parentLayer.firstChild);
    }
    let aboveRoadsOption = document.createElement('option');
    aboveRoadsOption.value = 'under-roads-layer';
    aboveRoadsOption.textContent = 'Under Roads';
    aboveRoadsOption.selected = aboveRoadsOption.value == currentLayer;
    parentLayer.appendChild(aboveRoadsOption);
    W.map.layers.forEach(function(mapLayer) {
      if (mapLayer.name != 'Image Overlay') {
        var layerOption = document.createElement('option');
        layerOption.value = mapLayer.name;
        layerOption.textContent = mapLayer.name + (mapLayer.visibility ? '' : ' (' + I18n.t('image_overlays.layer_hidden') + ')');
        layerOption.selected = mapLayer.name == currentLayer;
        parentLayer.appendChild(layerOption);
      }
    });
  }

  function displayImportPage() {
    editPanel.classList.remove('hidden');
    overlayControls.classList.add('hidden');
    editButtonsContainer.classList.remove('hidden');
    pinToMapButton.classList.add('hidden');
    imagesList.classList.add('hidden');
    emptyList.classList.add('hidden');
    document.addEventListener('paste', pasteListener);
    panelTitleIcon.className = 'fa fa-download';
    panelTitleText.textContent = I18n.t('image_overlays.import_image');
    removeEditLayer();

    description.textContent = I18n.t('image_overlays.import_image_description');
    var addImageInput = document.createElement('input');
    addImageInput.type = 'file';
    addImageInput.accepts = 'image/*';
    addImageInput.className = 'center-block';
    addImageInput.addEventListener('change', function() {
      displayAlignPage({
        blob: addImageInput.files[0]
      });
    });
    instructions.textContent = '';
    instructions.appendChild(addImageInput);
    instructions.appendChild(importError);

    if (navigator.storage.persist) {
      navigator.storage.persist().then((persistent) => {
        persistentStorageWarning.classList.toggle('hidden', persistent);
      });
    }
    editPanel.classList.remove('hidden');
  }

  function displayAlignPage(overlay, key) {
    currentBlob = overlay.blob;
    currentKey = key;
    document.removeEventListener('paste', pasteListener);
    panelTitleIcon.className = 'fa fa-arrows-alt';
    panelTitleText.textContent = I18n.t('image_overlays.align_image');
    parentLayer.selectedIndex = 0;
    exportButton.classList.add('hidden');
    pinToMapButton.classList.remove('hidden');

    displayImageOverlay(overlay, !currentKey, function(newLayer) {
      editLayer = newLayer;
      layerControls.classList.remove('hidden');
      opacityRange.value = (overlay.opacity ? overlay.opacity * 50 : 50);
      updateParentLayer(overlay.layerTarget);
    });

    description.textContent = I18n.t('image_overlays.align_image_description');
    var scale = document.createElement('input');
    let numZoomLevels = W.map.getLayersBy("isBaseLayer", true)[0].numZoomLevels;
    instructions.textContent = '';
    instructions.appendChild(createControlButton('rotate-left', function() {
      editLayer.rotate(-45);
    }, '45°'));
    instructions.appendChild(createControlButton('rotate-left', function() {
      editLayer.rotate(-0.5 * scale.value/100);
    }));
    instructions.appendChild(createControlButton('arrow-up', function() {
      editLayer.shift(0, 10 * W.map.getResolution() * scale.value/100);
    }));
    instructions.appendChild(createControlButton('rotate-right', function() {
      editLayer.rotate(0.5 * scale.value/100);
    }));
    instructions.appendChild(createControlButton('rotate-right', function() {
      editLayer.rotate(45);
    }, '45°'));
    instructions.appendChild(document.createElement('br'));
    instructions.appendChild(createControlButton('arrow-left', function() {
      editLayer.shift(-10 * W.map.getResolution() * scale.value/100, 0);
    }));
    instructions.appendChild(createControlButton('crosshairs', function() {
      var layerCenter = editLayer.extent.getCenterLonLat();
      editLayer.shift(W.map.getCenter().lon - layerCenter.lon, W.map.getCenter().lat - layerCenter.lat);
    }));
    instructions.appendChild(createControlButton('arrow-right', function() {
      editLayer.shift(10 * W.map.getResolution() * scale.value/100, 0);
    }));
    instructions.appendChild(document.createElement('br'));
    instructions.appendChild(createControlButton('compress', function() {
      editLayer.scale(1 - 0.01 * (numZoomLevels-W.map.getZoom()) * scale.value/100);
    }));
    instructions.appendChild(createControlButton('arrow-down', function() {
      editLayer.shift(0, -10 * W.map.getResolution() * scale.value/100);
    }));
    instructions.appendChild(createControlButton('expand', function() {
      editLayer.scale(1 + 0.01 * (numZoomLevels-W.map.getZoom()) * scale.value/100);
    }));
    instructions.appendChild(document.createElement('br'));
    var stretchLabel = document.createElement('span');
    stretchLabel.textContent = I18n.t('image_overlays.stretch_image') + ' ';
    instructions.appendChild(stretchLabel);
    var horizontalStretchLabelIcon = document.createElement('i');
    horizontalStretchLabelIcon.className = 'fa fa-arrows-h';
    horizontalStretchLabelIcon.style.marginRight = '10px';
    instructions.appendChild(horizontalStretchLabelIcon);
    instructions.appendChild(createControlButton('plus', function() {
      editLayer.stretch(true, 1 + (0.01 * scale.value/100));
    }));
    instructions.appendChild(createControlButton('minus', function() {
      editLayer.stretch(true, 1 - (0.01 * scale.value/100));
    }));
    var verticalStretchLabelIcon = document.createElement('i');
    verticalStretchLabelIcon.style.margin = '15px 10px 15px 20px';
    verticalStretchLabelIcon.className = 'fa fa-arrows-v';
    verticalStretchLabelIcon.style.marginLeft = '10px';
    instructions.appendChild(verticalStretchLabelIcon);
    instructions.appendChild(createControlButton('plus', function() {
      editLayer.stretch(false, 1 + (0.01 * scale.value/100));
    }));
    instructions.appendChild(createControlButton('minus', function() {
      editLayer.stretch(false, 1 - (0.01 * scale.value/100));
    }));
    var sensitivityContainer = document.createElement('div');
    sensitivityContainer.className = 'imageoverlays-sensitivity';
    scale.id = 'imageoverlays-control-sensitivity';
    var controlSensitivity = document.createElement('label');
    controlSensitivity.textContent = I18n.t('image_overlays.control_sensitivity');
    controlSensitivity.htmlFor = scale.id;
    sensitivityContainer.appendChild(controlSensitivity);
    var sensitivity = document.createElement('span');
    sensitivity.textContent = '100%';
    scale.type = 'range';
    scale.min = 0;
    scale.value = 100;
    scale.max = 200;
    scale.addEventListener('input', function() {
      sensitivity.textContent = scale.value + '%';
    });
    sensitivityContainer.appendChild(scale);
    sensitivityContainer.appendChild(sensitivity);
    instructions.appendChild(sensitivityContainer);
    imageNameInput.value = overlay.name || currentBlob.name;
    instructions.appendChild(imageNameInput);
  }

  function displayGroupEditPanel(groupKey) {
    panelTitleIcon.className = 'fa fa-object-group';
    panelTitleText.textContent = I18n.t('image_overlays.' + (groupKey ? 'edit_group' : 'add_group'));
    description.textContent = '';
    var groupNameInput = document.createElement('wz-text-input');
    groupNameInput.className = 'imageoverlays-margins';
    groupNameInput.placeholder = I18n.t('image_overlays.group_name');
    var membersLabel = document.createElement('p');
    membersLabel.textContent = I18n.t('image_overlays.group_members') + ':';
    var checkboxList = document.createElement('div');
    checkboxList.className = 'group-checkbox-list';
    var saveButton = document.createElement('button');
    saveButton.className = 'btn btn-primary imageoverlays-margins';
    saveButton.innerHTML = '<i class="fa fa-save fa-fw"></i> ' + I18n.t('image_overlays.save_group');
    instructions.textContent = '';
    instructions.appendChild(groupNameInput);
    instructions.appendChild(membersLabel);
    instructions.appendChild(checkboxList);
    instructions.appendChild(saveButton);

    function renderCheckboxes(selectedKeys) {
      checkboxList.textContent = '';
      getIndexedDB(function(db) {
        db.transaction(['overlays'], 'readonly').objectStore('overlays').openCursor().addEventListener('success', function(e) {
          var cursor = e.target.result;
          if (!cursor) {
            if (!checkboxList.firstChild) {
              var empty = document.createElement('em');
              empty.textContent = I18n.t('image_overlays.no_members');
              checkboxList.appendChild(empty);
            }
            return;
          }
          var k = cursor.key;
          var overlayName = cursor.value.name || I18n.t('image_overlays.name_missing');
          var label = document.createElement('label');
          label.className = 'group-member-label';
          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.value = k;
          checkbox.checked = selectedKeys.some(function(sk) { return sk == k; });
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(' ' + overlayName));
          checkboxList.appendChild(label);
          cursor.continue();
        });
      });
    }

    if (groupKey) {
      getIndexedDB(function(db) {
        db.transaction(['groups'], 'readonly').objectStore('groups').get(groupKey).addEventListener('success', function(e) {
          var group = e.target.result;
          if (group) {
            groupNameInput.value = group.name || '';
            renderCheckboxes(group.overlayKeys || []);
          } else {
            renderCheckboxes([]);
          }
        });
      });
    } else {
      renderCheckboxes([]);
    }

    saveButton.addEventListener('click', function() {
      var selectedKeys = [];
      checkboxList.querySelectorAll('input[type=checkbox]:checked').forEach(function(cb) {
        selectedKeys.push(isNaN(cb.value) ? cb.value : Number(cb.value));
      });
      var groupData = { name: groupNameInput.value, overlayKeys: selectedKeys };
      getIndexedDB(function(db) {
        var store = db.transaction(['groups'], 'readwrite').objectStore('groups');
        var req = groupKey ? store.put(groupData, groupKey) : store.add(groupData);
        req.addEventListener('success', function(e) {
          var savedKey = groupKey || e.target.result;
          for (var i = imagesList.childNodes.length - 1; i >= 0; i--) {
            if (imagesList.childNodes[i].dataset.groupKey == savedKey) {
              imagesList.removeChild(imagesList.childNodes[i]);
            }
          }
          editPanel.classList.add('hidden');
          overlayControls.classList.remove('hidden');
          imagesList.classList.remove('hidden');
          emptyList.classList.toggle('hidden', imagesList.childNodes.length > 0);
          addGroupEntry(groupData.name, savedKey, groupData.overlayKeys);
        });
      });
    });
  }

  function pinToMap() {
    var prevKey = currentKey;
    var obj = {
      'blob': currentBlob,
      'name': imageNameInput.value,
      'extent': editLayer.extent.toArray(),
      'rotation': editLayer.rotation,
      'opacity': opacityRange.value / 50,
      'layerTarget': parentLayer.value
    };
    storeOverlay(obj, prevKey, function(e) {
      var newKey = e.target.result;
      editPanel.classList.add('hidden');
      exportButton.classList.remove('hidden');
      overlayControls.classList.remove('hidden');
      imagesList.classList.remove('hidden');
      for (var i = imagesList.childNodes.length - 1; i >= 0; i--) {
        if (imagesList.childNodes[i].dataset.key == prevKey) {
          imagesList.removeChild(imagesList.childNodes[i]);
        }
      }
      // editLayer becomes the active layer for this key
      activeLayers.set(newKey, editLayer);
      editLayer = null;
      currentKey = newKey;
      addImageOverlay(obj.name, newKey);
      // Mark the newly created card as active
      for (var j = 0; j < imagesList.childNodes.length; j++) {
        var handle = imagesList.childNodes[j];
        if (handle.dataset.key == newKey) {
          setOverlayHandleActive(handle, true);
          handle.style.fontWeight = '700';
          break;
        }
      }
      emptyList.classList.toggle('hidden', imagesList.childNodes.length > 0);
    });
    editButtonsContainer.classList.add('hidden');
  }

  function storeOverlay(overlay, key, callback) {
    getIndexedDB(function(db) {
      if (key) {
        db.transaction(['overlays'], 'readwrite').objectStore('overlays').put(overlay, key).addEventListener('success', callback);
      } else {
        db.transaction(['overlays'], 'readwrite').objectStore('overlays').add(overlay).addEventListener('success', callback);
      }
    });
  }

  function displayImageOverlay(overlay, rescale, callback) {
    var url = window.URL.createObjectURL(overlay.blob);
    overlay.extent = overlay.extent ? new OpenLayers.Bounds(overlay.extent) : getMapExtent();
    overlay.rotation = overlay.rotation || 0;
    var img = document.createElement('img');
    img.addEventListener('load', function() {
      if (rescale) {
        var mapExtentAspectRatio = overlay.extent.getWidth() / overlay.extent.getHeight();
        var imageAspectRatio = img.naturalWidth / img.naturalHeight;
        if (mapExtentAspectRatio > imageAspectRatio) {
          var widthDiff = overlay.extent.getWidth() - (overlay.extent.getHeight() * imageAspectRatio);
          overlay.extent = new OpenLayers.Bounds([overlay.extent.left + widthDiff/2 , overlay.extent.bottom, overlay.extent.right - widthDiff/2, overlay.extent.top]);
        } else {
          var heightDiff = overlay.extent.getHeight() - (overlay.extent.getWidth() / imageAspectRatio);
          overlay.extent = new OpenLayers.Bounds([overlay.extent.left, overlay.extent.bottom + heightDiff/2, overlay.extent.right, overlay.extent.top - heightDiff/2]);
        }
        overlay.extent = overlay.extent.scale(0.8);
      }
      var newLayer = new OpenLayers.Layer.OverlayImage('Image Overlay', url, overlay.extent, new OpenLayers.Size(img.naturalWidth, img.naturalHeight), overlay.key, { 'rotation': overlay.rotation, 'opacity': overlay.opacity || 1 });
      W.map.addLayer(newLayer);
      positionLayer(newLayer, overlay.layerTarget);
      if (!getMapExtent().intersectsBounds(overlay.extent)) {
        W.map.getOLMap().zoomToExtent(overlay.extent);
      }
      callback(newLayer);
    });
    img.addEventListener('error', e => log(e));
    img.src = url;
  }

  function positionLayer(targetLayer, layerTarget) {
    if (layerTarget === 'under-roads-layer' || !layerTarget) {
      let targetIndex = W.map.getLayerIndex(W.map.getLayerByUniqueName('roads'));
      W.map.getOLMap().setLayerIndex(targetLayer, targetIndex);
    } else {
      let targetIndex = W.map.getLayerIndex(W.map.getLayersByName(layerTarget)[0]);
      if (!targetIndex || targetIndex <= 0) {
        targetIndex = W.map.getLayerIndex(W.map.getLayerByUniqueName('roads'));
        W.map.getOLMap().setLayerIndex(targetLayer, targetIndex);
      } else {
        W.map.getOLMap().setLayerIndex(targetLayer, targetIndex + 1);
      }
    }
  }

  function removeEditLayer() {
    if (editLayer) {
      W.map.removeLayer(editLayer);
      editLayer = null;
    }
  }

  function exportOverlay(key) {
    if (!key) return;
    getIndexedDB(function(db) {
      db.transaction(['overlays'], 'readonly').objectStore('overlays').get(key).addEventListener('success', function(e) {
        var result = e.target.result;
        if (!result) return;
        if (result.blob) {
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function() {
            result.blob = fileReader.result;
            triggerDownload(result.name, result);
          });
          fileReader.readAsDataURL(result.blob);
        } else {
          triggerDownload(result.name, result);
        }
      });
    });
  }

  function exportGroup(groupKey) {
    getIndexedDB(function(db) {
      db.transaction(['groups'], 'readonly').objectStore('groups').get(groupKey).addEventListener('success', function(e) {
        var group = e.target.result;
        if (!group) return;
        var overlayKeys = group.overlayKeys || [];
        if (overlayKeys.length === 0) {
          triggerDownload(group.name, { type: 'group', name: group.name, overlays: [] });
          return;
        }
        var overlays = new Array(overlayKeys.length);
        var remaining = overlayKeys.length;
        function checkDone() {
          remaining--;
          if (remaining === 0) {
            triggerDownload(group.name, { type: 'group', name: group.name, overlays: overlays.filter(Boolean) });
          }
        }
        overlayKeys.forEach(function(k, idx) {
          getIndexedDB(function(db) {
            db.transaction(['overlays'], 'readonly').objectStore('overlays').get(k).addEventListener('success', function(e) {
              var overlay = e.target.result;
              if (!overlay) { checkDone(); return; }
              if (overlay.blob instanceof Blob) {
                var fr = new FileReader();
                fr.addEventListener('load', function() {
                  overlays[idx] = Object.assign({}, overlay, { blob: fr.result });
                  checkDone();
                });
                fr.readAsDataURL(overlay.blob);
              } else {
                overlays[idx] = overlay;
                checkDone();
              }
            });
          });
        });
      });
    });
  }

  function triggerDownload(name, data) {
    var download = document.createElement('a');
    download.download = name.replace(/[/\\?%*:|"<>\.$#,= ]/g, '-') + '.json';
    download.style.display = 'none';
    download.rel = 'noopener';
    var bytes = new TextEncoder().encode(JSON.stringify(data));
    download.href = URL.createObjectURL(new Blob([bytes], { type: "application/json;charset=utf-8" }));
    document.body.appendChild(download);
    download.click();
    setTimeout(function() { URL.revokeObjectURL(download.href); }, 30000);
    document.body.removeChild(download);
  }

  function importLayerFromData(data, callback) {
    if (data.blob && typeof data.blob === 'string') {
      var mimeTypeSearch = data.blob.match(/:([^;]+);/);
      var mimeType = (mimeTypeSearch && mimeTypeSearch.length >= 2 ? mimeTypeSearch[1] : '');
      var bytes = atob(data.blob.split(',')[1]);
      var arrayBuffer = new ArrayBuffer(bytes.length);
      var intArray = new Uint8Array(arrayBuffer);
      for (var i = 0; i < bytes.length; i++) {
        intArray[i] = bytes.charCodeAt(i);
      }
      data.blob = new File([arrayBuffer], data.name, { type: mimeType });
    }
    storeOverlay(data, null, callback);
  }

  // Request file to import, then process it
  function importLayer() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', function() {
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function() {
        document.body.removeChild(fileInput);
        var result = JSON.parse(fileReader.result);
        importLayerFromData(result, function(e) {
          var key = e.target.result;
          addImageOverlay(result.name, key);
          getIndexedDB(function(db) {
            db.transaction(['overlays'], 'readonly').objectStore('overlays').get(key).addEventListener('success', function(ev) {
              var overlay = ev.target.result;
              overlay.key = key;
              displayImageOverlay(overlay, false, function(newLayer) {
                activeLayers.set(key, newLayer);
                updateOverlayHandleVisibility(key, true);
                focusOverlay(key, null);
              });
            });
          });
        });
      });
      fileReader.readAsText(fileInput.files[0]);
    });
    document.body.appendChild(fileInput);
    fileInput.click();
  }

  function importGroup() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', function() {
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function() {
        document.body.removeChild(fileInput);
        var result = JSON.parse(fileReader.result);
        if (result.type !== 'group') {
          // Treat as a single overlay import
          importLayerFromData(result, function(e) {
            addImageOverlay(result.name, e.target.result);
          });
          return;
        }
        var overlaysData = result.overlays || [];
        if (overlaysData.length === 0) {
          getIndexedDB(function(db) {
            db.transaction(['groups'], 'readwrite').objectStore('groups').add({ name: result.name, overlayKeys: [] }).addEventListener('success', function(e) {
              addGroupEntry(result.name, e.target.result, []);
            });
          });
          return;
        }
        var importedKeys = new Array(overlaysData.length).fill(null);
        var remaining = overlaysData.length;
        function checkAllImported() {
          remaining--;
          if (remaining === 0) {
            var validKeys = importedKeys.filter(function(k) { return k !== null; });
            getIndexedDB(function(db) {
              db.transaction(['groups'], 'readwrite').objectStore('groups').add({ name: result.name, overlayKeys: validKeys }).addEventListener('success', function(e) {
                addGroupEntry(result.name, e.target.result, validKeys);
              });
            });
          }
        }
        overlaysData.forEach(function(overlayData, idx) {
          importLayerFromData(overlayData, function(e) {
            importedKeys[idx] = e.target.result;
            addImageOverlay(overlayData.name, e.target.result);
            checkAllImported();
          });
        });
      });
      fileReader.readAsText(fileInput.files[0]);
    });
    document.body.appendChild(fileInput);
    fileInput.click();
  }
}

function enrichOpenLayers() {
  if (OpenLayers.Layer.OverlayImage) {
    return;
  }
  // Based on the OpenLayers.Layer.Image class
  OpenLayers.Layer.OverlayImage = OpenLayers.Class(OpenLayers.Layer, {
    isBaseLayer: false,
    url: null,
    extent: null,
    size: null,
    tile: null,
    rotation: null,
    key: null,
    initialize: function(name, url, extent, size, key, options) {
      options = options || {};
      this.url = url;
      this.extent = extent;
      this.maxExtent = extent;
      this.size = size;
      this.key = key;
      this.rotation = options.rotation || 0;
      OpenLayers.Layer.prototype.initialize.apply(this, [name, options]);
    },
    destroy: function() {
      if (this.tile) {
        this.removeTileMonitoringHooks(this.tile);
        this.tile.destroy();
        this.tile = null;
      }
      OpenLayers.Layer.prototype.destroy.apply(this, arguments);
    },
    setMap: function(map) {
      OpenLayers.Layer.prototype.setMap.apply(this, arguments);
    },
    moveTo:function(bounds, zoomChanged, dragging) {
      OpenLayers.Layer.prototype.moveTo.apply(this, arguments);
      var firstRendering = (this.tile == null);
      if (zoomChanged || firstRendering) {
        this.setTileSize();
        var ulPx = this.map.getLayerPxFromLonLat({
          lon: this.extent.left,
          lat: this.extent.top
        });

        if (firstRendering) {
          this.tile = new OpenLayers.Tile.Image(this, ulPx, this.extent, null, this.tileSize);
          this.addTileMonitoringHooks(this.tile);
        } else {
          this.tile.size = this.tileSize.clone();
          this.tile.position = ulPx.clone();
        }
        this.tile.draw();
        this.setRotation(this.rotation);
      }
    },
    shift: function(x, y) {
      this.extent = this.extent.add(x, y);
      var ulPx = this.map.getLayerPxFromLonLat({
        lon: this.extent.left,
        lat: this.extent.top
      });
      this.tile.position = ulPx.clone();
      this.tile.positionTile();
    },
    scale: function(factor) {
      this.extent = this.extent.scale(factor);
      this.setTileSize();
      var ulPx = this.map.getLayerPxFromLonLat({
        lon: this.extent.left,
        lat: this.extent.top
      });
      this.tile.position = ulPx.clone();
      this.tile.size = this.tileSize.clone();
      this.tile.positionTile();
    },
    stretch: function(horizontal, factor) {
      var extent = this.extent.toArray();
      var distance;
      if (horizontal) {
        distance = Math.abs(extent[2] - extent[0]) * (1-factor) / 2;
        extent[0] += distance;
        extent[2] -= distance;
      } else {
        distance = Math.abs(extent[1] - extent[3]) * (1-factor) / 2;
        extent[1] += distance;
        extent[3] -= distance;
      }
      this.extent = OpenLayers.Bounds.fromArray(extent);
      this.setTileSize();
      var ulPx = this.map.getLayerPxFromLonLat({
        lon: this.extent.left,
        lat: this.extent.top
      });
      this.tile.position = ulPx.clone();
      this.tile.size = this.tileSize.clone();
      this.tile.positionTile();
    },
    rotate: function(rotation) {
      this.setRotation(this.rotation + rotation);
    },
    setTileSize: function() {
      var tileWidth = this.extent.getWidth() / this.map.getResolution();
      var tileHeight = this.extent.getHeight() / this.map.getResolution();
      this.tileSize = new OpenLayers.Size(tileWidth, tileHeight);
    },
    addTileMonitoringHooks: function(tile) {
      tile.onLoadStart = function() {
        this.events.triggerEvent("loadstart");
      };
      tile.events.register("loadstart", this, tile.onLoadStart);
      tile.onLoadEnd = function() {
        this.events.triggerEvent("loadend");
      };
      tile.events.register("loadend", this, tile.onLoadEnd);
      tile.events.register("unload", this, tile.onLoadEnd);
    },
    removeTileMonitoringHooks: function(tile) {
      tile.unload();
      tile.events.un({
        "loadstart": tile.onLoadStart,
        "loadend": tile.onLoadEnd,
        "unload": tile.onLoadEnd,
        scope: this
      });
    },
    setUrl: function(newUrl) {
      this.url = newUrl;
      this.tile.draw();
    },
    getURL: function(bounds) {
      return this.url;
    },
    setRotation: function(rotation) {
      this.rotation = rotation;
      this.tile.getTile().style.transform = 'rotate(' + rotation + 'deg)';
    },
    CLASS_NAME: "OpenLayers.Layer.OverlayImage"
  });
}

function setTranslations(translations) {
  I18n.translations[I18n.currentLocale()].image_overlays = translations.en;
  for (var i = 0; i < Object.keys(translations).length; i++) {
    var locale = Object.keys(translations)[i];
    if (I18n.currentLocale() == locale) {
      I18n.translations[locale].image_overlays = translations[locale];
      return;
    }
  }
}

// Create the tab
async function addTab() {
  const {tabLabel, tabPane} = W.userscripts.registerSidebarTab("imageoverlays");

  tabLabel.innerHTML = '<span class="fa fa-picture-o"></span>';
  tabLabel.title = I18n.t('image_overlays.tab_title');
  tabPane.id = 'sidepanel-imageoverlays';

  await W.userscripts.waitForElementConnected(tabPane);

  return Promise.resolve(tabPane);
}

function createControlButton(icon, callback, text) {
  var controlButton = document.createElement('button');
  var controlButtonIcon = document.createElement('i');
  controlButtonIcon.className = 'fa fa-fw fa-' + icon;
  controlButton.appendChild(controlButtonIcon);
  if (text) {
    controlButton.appendChild(document.createTextNode(' ' + text));
  }
  controlButton.addEventListener('click', callback);
  return controlButton;
}

function getIndexedDB(callback) {
  var req = indexedDB.open('ImageOverlays', 2);
  req.addEventListener('upgradeneeded', function(e) {
    var db = e.target.result;
    if (e.oldVersion < 1) {
      db.createObjectStore('overlays', { autoIncrement: true });
    }
    if (e.oldVersion < 2) {
      db.createObjectStore('groups', { autoIncrement: true });
    }
  });
  req.addEventListener('error', log);
  req.addEventListener('success', e => callback(e.target.result));
}

function getMapExtent() {
  let dataProjection = new OpenLayers.Projection('EPSG:4326');
  return (new OpenLayers.Bounds(W.map.getExtent())).transform(dataProjection, W.map.getProjectionObject());
}

function log(message) {
  if (typeof message === 'string') {
    console.log('%c' + GM_info.script.name + ' (v' + GM_info.script.version + '): %c' + message, 'color:black', 'color:#d97e00');
  } else {
    console.log('%c' + GM_info.script.name + ' (v' + GM_info.script.version + ')', 'color:black', message);
  }
}

function applyStyles() {
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.textContent = `
.image-overlays-source-warning {
  background-color: #fff;
  z-index: 1;
  border-radius: 8px;
  border: 2px solid #f00;
  padding: 8px;
}

.image-overlays-source-warning > i:first-child {
  color: #f00;
}

.image-overlays-source-warning h3 {
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 1.42857;
  color: #f00;
  font-weight: 700;
}

.image-overlays-source-warning ul {
  padding-left: 5%;
}

.image-overlays-source-warning footer {
  font-style: italic;
  text-align: center;
}

h3.image-overlays-panel-title {
  margin-bottom: 1.5em;
  text-align: center;
}

#sidepanel-imageoverlays .result-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#sidepanel-imageoverlays .hidden {
  display: none;
}

#sidepanel-imageoverlays .image-overlay-handle {
  display: flex;
  font-size: 14px;
  align-items: center;
  gap: 3px;
}

#sidepanel-imageoverlays .image-overlay-handle div:first-child {
  flex-grow: 1;
  word-wrap: anywhere;
}

#sidepanel-imageoverlays .cancel {
  position: absolute;
  right: 15px;
}

#sidepanel-imageoverlays .controls {
  margin-top: 8px;
}

#sidepanel-imageoverlays input[type=range] {
  width: 180px;
  display: inline;
  margin: 5px;
  vertical-align: bottom;
}

#sidepanel-imageoverlays .imageoverlays-sensitivity {
  display: flex;
  align-items: center;
}

#sidepanel-imageoverlays .imageoverlays-sensitivity label {
  margin-bottom: 0;
}

#sidepanel-imageoverlays #imageOverlaysParentLayer {
  background-color: var(--background_variant, #f2f4f7);
}

#sidepanel-imageoverlays p:last-child {
  font-size: 0.9em;
  margin-top: 10px;
}

#sidepanel-imageoverlays .result .remove {
  font-size: 14px;
  float: right;
  font-weight: normal;
  margin-top: -6px;
}

#sidepanel-imageoverlays .result .rename {
  font-size: 14px;
  float: right;
  font-weight: normal;
  margin-top: -6px;
  margin-left: 4px;
}

.imageoverlays-margins {
  margin: 15px 0 15px 0;
  position: relative;
}

#sidepanel-imageoverlays .group-card .image-overlay-handle {
  background-color: var(--background_variant, #f2f4f7);
  border-radius: 4px;
  padding: 2px 4px;
}

#sidepanel-imageoverlays .group-count-badge {
  font-size: 0.85em;
  color: #666;
}

#sidepanel-imageoverlays .toggle-visibility {
  font-size: 14px;
  font-weight: normal;
  margin-top: -6px;
  margin-right: 2px;
  color: #aaa;
}

#sidepanel-imageoverlays .toggle-visibility.fa-eye {
  color: #2196f3;
}

#sidepanel-imageoverlays .group-checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
}

#sidepanel-imageoverlays .group-member-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: normal;
  cursor: pointer;
}
`;
  }
  if (!styleElement.parentNode) {
    document.head.appendChild(styleElement);
  }
}

function onWmeInitialized() {
  if (W.userscripts?.state?.isReady) {
    log('W is ready and in "wme-ready" state. Proceeding with initialization.');
    onWmeReady();
  } else {
    log('W is ready, but not in "wme-ready" state. Adding event listener.');
    document.addEventListener('wme-ready', onWmeReady, { once: true });
  }
}

function bootstrap() {
  if (!W) {
    log('W is not available. Adding event listener.');
    document.addEventListener('wme-initialized', onWmeInitialized, { once: true });
  } else {
    onWmeInitialized();
  }
}

bootstrap();
