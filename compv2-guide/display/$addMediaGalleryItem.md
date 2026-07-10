# $addMediaGalleryItem

`$addMediaGalleryItem` adds a **media item** to a media gallery. Media items can be images or videos. Call this after `$addMediaGallery` to populate the gallery.

---

## Syntax

```
$addMediaGalleryItem[Media URL;Description;Spoiler;Gallery ID]
```

- `Media URL`: the URL of the image or video.
- `Description`: alt text for the media item. Can be left empty.
- `Spoiler`: whether to mark the item as a spoiler. Leave empty for no spoiler.
- `Gallery ID`: ID of the gallery to add this item to.

---

## What happens

1. `$addMediaGalleryItem` adds a media item to the specified gallery.
2. The item appears inside the gallery along with any other items.
3. If spoiler is set, the item is hidden behind a spoiler overlay.

---

## Example 1: Images and videos

```
$addMediaGallery[gallery]
$addMediaGalleryItem[https://example.com/img1.png;Screenshot;;gallery]
$addMediaGalleryItem[https://example.com/video.mp4;Tutorial video;;gallery]
$addMediaGalleryItem[https://example.com/img2.png;Result;;gallery]
```

**Result:**

![Media gallery items example](../images/addMediaGalleryItem-1.png)

What happens:

1. `$addMediaGallery` creates a gallery.
2. Three `$addMediaGalleryItem` calls add two images and a video to the gallery.

The gallery displays all three items.

---

## Example 2: Mixing spoiler and non-spoiler items

```
$addMediaGallery[gallery]
$addMediaGalleryItem[https://example.com/preview.png;Preview image;;gallery]
$addMediaGalleryItem[https://example.com/spoiler.png;Hidden content;true;gallery]
$addMediaGalleryItem[https://example.com/spoiler.mp4;Secret video;true;gallery]
```

**Result:**

![Spoiler gallery items example](../images/addMediaGalleryItem-2.png)

What happens:

1. `$addMediaGallery` creates a gallery.
2. The first item is a normal image.
3. The second and third items are marked as spoilers.

Non-spoiler items are visible immediately. Spoiler items are hidden behind an overlay until clicked.

---

## Common uses

- **Building media galleries** with multiple images
- **Adding videos** alongside images in a gallery
- **Hiding sensitive media** behind spoilers

---

## See also

- [$addMediaGallery](../parents/$addMediaGallery.md): to create the gallery that holds items
- [$addContainer](../parents/$addContainer.md): to create a container for the gallery
